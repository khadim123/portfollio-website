'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      'This developer is a true professional. They delivered a high-quality product on time and on budget. I would highly recommend them to anyone.',
    author: 'Jane Doe',
    title: 'CEO, Acme Inc.',
  },
  {
    quote:
      'Working with this developer was a pleasure. They are a great communicator and a true team player. I look forward to working with them again in the future.',
    author: 'John Smith',
    title: 'CTO, Stark Industries',
  },
  {
    quote:
      "I was blown away by the quality of this developer's work. They are a true master of their craft. I would recommend them to anyone without hesitation.",
    author: 'Peter Parker',
    title: 'Photographer, Daily Bugle',
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          What People Are Saying
        </motion.h2>
        <div className="mt-12 relative h-64">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full flex flex-col items-center justify-center text-center"
            >
              <blockquote className="max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                  {`"${testimonials[index].quote}"`}
                </p>
                <footer className="mt-4">
                  <cite className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonials[index].author}
                  </cite>
                  <span className="block text-gray-500 dark:text-gray-400">
                    {testimonials[index].title}
                  </span>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
            aria-label="Previous testimonial"
          >
            {'<'}
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
            aria-label="Next testimonial"
          >
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;