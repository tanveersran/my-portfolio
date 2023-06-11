import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-3 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-row items-center"
      >
        {socials.map(socials => ( 
            <SocialIcon
            key={socials._id}
            url={socials.url}
            fgColor="currentColor"
            target="_blank"
            bgColor="transparent"
            className="socialIcons"
          />
        ))}
      </motion.div>

        
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="grey"
            bgColor="transparent"
            url="#contact"
          />
          <p  className="uppercase hidden md:inline-flex text-sm text-gray-400">
            <a href="#contact">Get in Touch</a>
          </p>
        </motion.div>
    </header>
  );
}
