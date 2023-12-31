import React from 'react'
import { motion } from 'framer-motion'
import { Skill as MySkill } from '../typings';
import { urlFor } from '../sanity'

type Props = {
    directionLeft?: boolean;
    skill: MySkill;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-gray-500 object-cover w-[64px] h-[64px] sm:w-24 sm:h-24 md:h-28 md:w-28 xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[64px] h-[64px] sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-30 xl:h-30 rounded-full z-0'>
            <div className="flex items-center justify-center h-full">
                <p className="text-xs sm:text-base font-bold text-black opacity-100">{skill.title}</p>
            </div>
        </div>
    </div>
  )
}
