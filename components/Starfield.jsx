import React from 'react';

const Starfield = () => (
  <div className='starfield' aria-hidden='true'>
    <span className='starfield-layer starfield-far' />
    <span className='starfield-layer starfield-mid' />
    <span className='starfield-layer starfield-near' />
  </div>
);

export default Starfield;
