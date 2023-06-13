import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as MySkills } from "../typings"

type Props = {
  skills: MySkills[];
}

export default function Skills({skills}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">&nbsp;Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover to view skill title</h3>

        <div className='mt-20 sm:mt-0 grid grid-cols-3 sm:grid-cols-4 gap-5'>
          {skills?.slice(0, skills.length / 2).map(skill => (
            <Skill key={skill._id} skill={skill}/>
          ))}
          {skills?.slice(skills.length / 2, skills.length).map(skill => (
            <Skill key={skill._id} skill={skill} directionLeft/>
          ))}
        </div>
    </motion.div>
  )
}
