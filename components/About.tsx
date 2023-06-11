import { motion } from 'framer-motion';
import React from 'react'
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        transition={{
            duration: 1.5,
        }}
        whileInView={{ opacity: 1}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">&nbsp;About</h3>

        <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true}}
            src={urlFor(pageInfo?.profilePic).url()}
            className="mt-20 md:mt-0 hidden md:block flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[400px]"
            id="aboutImage"
        / >
        
        <div className="space-y-4 px-0 md:px-10 ">
            <h4 className="mt-24 sm:mt-0 text-1xl sm:text-3xl font-semibold md:text-4xl">Here is a {" "}
                <span className="underline decoration-[#F7AB0A]/50">
                     little 
                </span> {" "}
                background
            </h4>
            <p className="text-[12px] sm:text-sm md:text-base text-justify">
                {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}