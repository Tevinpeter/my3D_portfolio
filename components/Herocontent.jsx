import React from 'react'
import {motion} from "framer-motion"
import {styles} from "/src/styles.js"
export const Herocontent = () => {
  return (
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
  )
}


