import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '/src/hoc';
import { technologies } from '/src/constants';

const Tech = () => {
  const reducedMotion = useReducedMotion();
  const [desktop, setDesktop] = useState(() => window.matchMedia('(min-width: 1024px)').matches);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const update = () => setDesktop(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return (
  <div className='relative isolate lg:min-h-[450px] lg:flex lg:items-center'>
    {desktop && !reducedMotion && <video
      loop
      muted
      autoPlay
      playsInline
      preload='metadata'
      aria-hidden='true'
      className='hidden lg:block absolute inset-0 w-full h-full object-contain opacity-40 pointer-events-none'
      src='/encryption.webm'
    />}

    <ul className='relative w-full flex flex-row flex-wrap justify-center gap-10 list-none'>
      {technologies.map((technology) => (
        <li className='w-28 h-28' key={technology.name}>
          <div
            className='w-full h-full flex items-center justify-center bg-[#fff8eb] shadow-card'
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)' }}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              title={technology.name}
              width={64}
              height={64}
              loading='lazy'
              decoding='async'
              className='w-16 h-16 object-contain'
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default SectionWrapper(Tech, 'skills');
