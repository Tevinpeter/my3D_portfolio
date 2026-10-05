import React from 'react'
import Tilt from "react-tilt"
import {motion} from "framer-motion"

import {styles} from "/src/styles.js";
import {services} from "/src/constants";
import {fadeIn, textVariant} from "/src/utils/motion.js";
import { SectionWrapper } from '/src/hoc';

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className = 'xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right","spring",0.5 *index,0.75)}
      className = 'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
      <div
      options = {{
        max:45,
        scale:1,
        speed: 450
      }}
      className = "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
      <img src ={icon} alt = {title} className ="w-16 h-16 object-contain" />
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>


      </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      A software engineer pursuing a Bsc. in Computer Engineering at Vistula University. I thrive on unraveling software puzzles and crafting applications that are both technically robust and delightfully user-friendly.
      I bring a versatile skill set to the table, proficient in JavaScript, Java, Python and c# and adept at crafting full-stack web solutions using React, Next.js, and Django, along with mastering HTML, CSS, Git, and GitHub. My expertise extends to leveraging Amazon S3, React Native, MongoDB and SQL, showcasing a deep understanding of both front-end and back-end development. With a strong grasp of data structures and algorithms, backed by hands-on projects and coursework, I possess the theoretical knowledge and practical acumen necessary for a thriving career in software engineering 

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) => (
          <ServiceCard key={service.title} index = {index} {...service} />
          )
        )
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");