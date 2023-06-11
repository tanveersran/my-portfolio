import React from 'react'
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experiences: Experience[];
}

export default function WorkExperience({experiences}: Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl">&nbsp;Experience</h3>
        <div className="w-full mt-5 sm:mt-0 flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {experiences?.map(experience => (
              <ExperienceCard key={experience._id} experience={experience}/>
            ))}
        </div>
    </div>
  )
} 