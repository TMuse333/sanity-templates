import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import {AppearingGradient} from 'focusflow-components'

interface ClosingCTAProps {
  description: string;
  buttonText: string;
  buttonLink: string;
  title:string,
  gradientColor:string
}

const ClosingCTA: React.FC<ClosingCTAProps> = ({
  description,
  buttonText,
  buttonLink,
}) => {
  // Framer Motion variants for button animation
  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-r from-teal-400 via-emerald-500 to-indigo-600 py-16 overflow-hidden">
        <AppearingGradient
        text={title}
        darkColor={gradientColor}
        mainColor
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        {/* Description */}
        <p className="text-lg md:text-xl text-white font-medium mb-6 leading-relaxed">
          {description}
        </p>

        {/* Animated Button */}
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link
            href={buttonLink}
            className="inline-block bg-white text-teal-800 font-bold text-lg py-3 px-8 rounded-full hover:bg-teal-100 transition-colors duration-300"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;