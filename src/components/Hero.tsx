'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-200/[0.6] dark:bg-grid-gray-800/[0.6]"></div>
      <div className="absolute inset-0 bg-radial-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>

      <div className="relative z-10 p-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white"
        >
          Your Name
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          I'm a passionate web developer creating modern and responsive web applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/portfolio"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-transparent text-blue-600 font-semibold px-8 py-3 border border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;