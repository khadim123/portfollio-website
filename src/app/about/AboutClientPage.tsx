'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';

const AboutClientPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
        >
          About Me
        </motion.h1>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <Image
              src="/profile-placeholder.svg"
              alt="Profile portrait"
              width={400}
              height={400}
              priority
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {`I'm a Developer Name`}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {`A passionate and creative web developer with a knack for building beautiful,
              user-friendly, and performant websites and applications. I have a strong
              background in both front-end and back-end development, and I'm always
              eager to learn new technologies and take on challenging projects.`}
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-8">
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</span>
                <p className="text-gray-500 dark:text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</span>
                <p className="text-gray-500 dark:text-gray-400">Happy Clients</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</span>
                <p className="text-gray-500 dark:text-gray-400">Projects Completed</p>
              </div>
            </div>
            <div className="mt-8 text-center md:text-left">
              <a
                href="/resume.pdf"
                download
                className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Timeline />
    </>
  );
};

export default AboutClientPage;