'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    date: '2020 - Present',
    title: 'Lead Developer at Acme Inc.',
    description:
      'Leading a team of developers to build and maintain high-quality web applications. Responsible for architecture, code reviews, and mentoring junior developers.',
  },
  {
    date: '2018 - 2020',
    title: 'Senior Developer at Stark Industries',
    description:
      'Worked on a variety of projects, from marketing websites to complex web applications. Gained experience with a wide range of technologies and frameworks.',
  },
  {
    date: '2016 - 2018',
    title: 'Junior Developer at Wayne Enterprises',
    description:
      'Started my career as a web developer, learning the fundamentals of web development and building my skills on a variety of projects.',
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          My Experience
        </motion.h2>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-5/12 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;