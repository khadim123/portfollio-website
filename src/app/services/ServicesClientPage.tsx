'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    title: 'Web Development',
    description:
      'I build fast, responsive, and secure websites and web applications using modern technologies like Next.js, React, and TypeScript.',
    price: 'Starting at $1000',
    icon: 'code',
  },
  {
    title: 'UI/UX Design',
    description:
      'I design beautiful, user-friendly, and accessible interfaces that are a joy to use. I use tools like Figma and Adobe XD.',
    price: 'Starting at $500',
    icon: 'design',
  },
  {
    title: 'Mobile Development',
    description:
      'I build cross-platform mobile applications for iOS and Android using React Native. I can also build native applications with Swift and Kotlin.',
    price: 'Starting at $2000',
    icon: 'mobile',
  },
  {
    title: 'E-commerce',
    description:
      'I build powerful and scalable e-commerce solutions with platforms like Shopify and WooCommerce. I can also build custom solutions with Next.js and Stripe.',
    price: 'Starting at $3000',
    icon: 'cart',
  },
];

const faqs = [
  {
    question: 'What is your hourly rate?',
    answer:
      'My hourly rate is $100/hour. I also offer fixed-price quotes for projects.',
  },
  {
    question: 'What is your availability?',
    answer:
      'I am currently available for new projects. I can start working on your project within 1-2 weeks.',
  },
  {
    question: 'What is your development process?',
    answer:
      'I follow an agile development process. I work in sprints and provide regular updates on the progress of your project.',
  },
];

const ServicesClientPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
      >
        My Services
      </motion.h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
          >
            {/* Add your SVG icons here */}
            <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-3xl text-blue-600 dark:text-blue-400">
                {/* Icon placeholder */}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
            <p className="mt-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
              {service.price}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 py-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white"
              >
                <span>{faq.question}</span>
                <span>{openFaq === index ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesClientPage;