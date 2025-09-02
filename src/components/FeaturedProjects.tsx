'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    slug: 'project-one',
    title: 'Project One',
    summary: 'A short description of the first featured project.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/placeholder.svg',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    summary: 'A short description of the second featured project.',
    tags: ['React', 'Framer Motion'],
    imageUrl: '/placeholder.svg',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    summary: 'A short description of the third featured project.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    imageUrl: '/placeholder.svg',
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    summary: 'Another amazing project to showcase.',
    tags: ['SvelteKit', 'TypeScript'],
    imageUrl: '/placeholder.svg',
  },
];

const FeaturedProjects: React.FC = () => {
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
          Featured Projects
        </motion.h2>
        <div className="mt-12 flex space-x-8 pb-4 overflow-x-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative h-48">
                {/* Placeholder for next/image */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-600"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.summary}
                </p>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View Details &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;