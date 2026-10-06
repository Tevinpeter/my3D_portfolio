import React from 'react';
import './hero-network.css';

// Fixed coordinates keep the artwork stable across renders and reloads.
const nodes = [
  [730, 185], [835, 115], [940, 155], [1010, 82], [1135, 120],
  [1235, 68], [1310, 165], [1435, 110], [875, 260], [1005, 270],
  [1120, 235], [1235, 310], [1370, 275], [1455, 350], [1045, 390],
  [1165, 440], [1300, 420], [1395, 490], [935, 485], [1080, 555],
  [1220, 570], [1345, 635], [1450, 590], [1145, 705], [1290, 755],
  [840, 655], [720, 560], [600, 690],
];
const connections = [
  [0, 1], [0, 8], [1, 2], [1, 3], [2, 3], [2, 9], [3, 4],
  [4, 5], [4, 6], [4, 10], [5, 7], [6, 7], [6, 10], [6, 12],
  [8, 9], [9, 10], [9, 14], [10, 11], [11, 12], [11, 15],
  [12, 13], [12, 16], [13, 17], [14, 15], [14, 18], [15, 16],
  [15, 19], [16, 17], [16, 20], [17, 22], [18, 19], [18, 26],
  [19, 20], [19, 23], [20, 21], [20, 23], [21, 22], [21, 24],
  [23, 24], [23, 25], [25, 26], [25, 27],
];

const HeroNetwork = () => (
  <div className='hero-network' aria-hidden='true'>
    <svg className='hero-network-art' viewBox='0 0 1440 850' preserveAspectRatio='xMidYMid slice' focusable='false'>
      <defs>
        <linearGradient id='hero-network-line' x1='0' y1='0' x2='1' y2='1'>
          <stop stopColor='#a78bfa' />
          <stop offset='.65' stopColor='#8b5cf6' />
          <stop offset='1' stopColor='#67e8f9' />
        </linearGradient>
        <radialGradient id='hero-network-glow'>
          <stop stopColor='#c4b5fd' stopOpacity='.32' />
          <stop offset='.35' stopColor='#8b5cf6' stopOpacity='.16' />
          <stop offset='1' stopColor='#8b5cf6' stopOpacity='0' />
        </radialGradient>
        <linearGradient id='hero-network-fade'>
          <stop offset='.3' stopColor='#000' />
          <stop offset='.67' stopColor='#fff' stopOpacity='.6' />
          <stop offset='1' stopColor='#fff' />
        </linearGradient>
        <mask id='hero-network-mask'>
          <rect width='1440' height='850' fill='url(#hero-network-fade)' />
        </mask>
      </defs>
      <g mask='url(#hero-network-mask)'>
        <g className='hero-network-connections' fill='none' stroke='url(#hero-network-line)' strokeWidth='1'>
          {connections.map(([from, to]) => {
            const [x1, y1] = nodes[from];
            const [x2, y2] = nodes[to];
            return <path key={`${from}-${to}`} d={`M${x1} ${y1} Q${(x1 + x2) / 2 + 12} ${(y1 + y2) / 2 - 8} ${x2} ${y2}`} />;
          })}
        </g>
        <g className='hero-network-nodes'>
          {nodes.map(([x, y], index) => (
            <g key={`${x}-${y}`} className={index % 5 === 0 ? 'hero-network-beacon' : undefined}>
              <circle cx={x} cy={y} r={index % 5 === 0 ? 24 : 13} fill='url(#hero-network-glow)' />
              <circle cx={x} cy={y} r={index % 5 === 0 ? 3 : 1.8} fill={index % 4 === 0 ? '#67e8f9' : '#c4b5fd'} />
            </g>
          ))}
        </g>
      </g>
      <g className='hero-network-periphery' fill='#a78bfa' stroke='#8b5cf6' strokeWidth='.7'>
        <path d='M50 120L155 70L270 130M50 120L110 225M270 130L370 90' fill='none' />
        <circle cx='50' cy='120' r='2' /><circle cx='155' cy='70' r='1.5' />
        <circle cx='270' cy='130' r='2' /><circle cx='110' cy='225' r='1.5' />
      </g>
    </svg>
  </div>
);

export default HeroNetwork;
