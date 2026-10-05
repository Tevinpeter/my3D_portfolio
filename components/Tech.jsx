import react from 'react'
import { SectionWrapper } from '/src/hoc';
import { technologies } from '/src/constants'
import { StarsCanvas } from './canvas'

import { BallCanvas } from './canvas';
const Tech = () => {
  return (
    <div className='relative'>
    {/* StarsCanvas with higher z-index */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <StarsCanvas />
    </div>

    {/* Container for large devices */}
    <div className='hidden lg:block w-full flex items-center justify-center z-10'>
      <div className='relative'>
        {/* Video element */}
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          style={{ opacity: 0.4 }}
          src="/public/encryption.webm"
        />

        {/* BallCanvas components positioned at the middle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Container for small devices */}
    <div className='lg:hidden'>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
};


export default SectionWrapper(Tech, "");

//flex flex-row flex-wrap justify-center gap-10 absolute top-15 left-0 right-0 bottom-15 gap-5