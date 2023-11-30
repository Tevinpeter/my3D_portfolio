import React from 'react'
import {motion} from "framer-motion"
import { ComputersCanvas } from '/components/canvas'
import {styles} from "/src/styles.js"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4682B4]' />
          <div className= "w-1 sm:h-80 h-40 " style={{background:"-webkit-linear-gradient(    -90deg,    #4682B4 0%,    rgba(60, 51, 80, 0) 100%  )"}} />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm <span className='text-[#4682B4]'>Tevin</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a software engineer specializing in building digital
          experiences.<br className='sm:block hidden' />Always ready to turn ideas into ventures for the  future  </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero