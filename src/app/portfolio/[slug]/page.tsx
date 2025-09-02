'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const allProjects = [
    {
    slug: 'project-one',
    title: 'Project One',
    summary: 'A short description of the first featured project.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/placeholder.svg',
    gallery: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    role: 'Lead Developer',
    problem: 'The client needed a new e-commerce platform to sell their products online.',
    solution: 'I built a custom e-commerce platform with Next.js, Stripe, and Sanity.io. The platform is fully responsive and includes a custom CMS for managing products and orders.',
    results: 'The new platform increased sales by 50% in the first quarter. The client was very happy with the results.',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    summary: 'A short description of the second featured project.',
    tags: ['React', 'Framer Motion'],
    imageUrl: '/placeholder.svg',
    gallery: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    role: 'Front-end Developer',
    problem: 'The client needed a new marketing website to showcase their services.',
    solution: 'I built a custom marketing website with React and Framer Motion. The website is fully responsive and includes a custom CMS for managing content.',
    results: 'The new website increased leads by 30% in the first month. The client was very happy with the results.',
    liveUrl: '#',
    repoUrl: '#',
  },
];

interface PageProps {
  params: {
    slug: string;
  };
}

const ProjectDetailPage = ({ params }: PageProps) => {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/portfolio" className="text-blue-600 dark:text-blue-400 mb-4 inline-block">
          &larr; Back to Portfolio
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Role</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              {project.role}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Problem</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              {project.problem}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Solution</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              {project.solution}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Results</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              {project.results}
            </p>
          </div>
          <div className="flex space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Live Site
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </motion.div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Gallery</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image}
                alt={`${project.title} gallery image ${index + 1}`}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;