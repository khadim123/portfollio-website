'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A collection of my projects.',
};

const allProjects = [
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
  {
    slug: 'project-five',
    title: 'Project Five',
    summary: 'A detailed project description goes here.',
    tags: ['Next.js', 'Tailwind CSS'],
    imageUrl: '/placeholder.svg',
  },
  {
    slug: 'project-six',
    title: 'Project Six',
    summary: 'This project showcases my skills in React and Framer Motion.',
    tags: ['React', 'Framer Motion', 'TypeScript'],
    imageUrl: '/placeholder.svg',
  },
];

const allTags = [...new Set(allProjects.flatMap((p) => p.tags))];

const PortfolioPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeTag, setActiveTag] = useState('All');

  const filterProjects = (tag: string) => {
    if (tag === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => project.tags.includes(tag))
      );
    }
    setActiveTag(tag);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
      >
        My Portfolio
      </motion.h1>
      <div className="mt-8 flex justify-center flex-wrap gap-2">
        <button
          onClick={() => filterProjects('All')}
          className={`px-4 py-2 text-sm font-medium rounded-full ${
            activeTag === 'All'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => filterProjects(tag)}
            className={`px-4 py-2 text-sm font-medium rounded-full ${
              activeTag === tag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <motion.div
        layout
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            layout
            key={project.slug}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
          >
            <div className="relative h-48">
              {/* Placeholder for next/image */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-600"></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                >
                  View Details
                </Link>
              </div>
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
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioPage;