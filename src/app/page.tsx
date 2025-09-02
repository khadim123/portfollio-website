import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/FeaturedProjects';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'The home page of my portfolio.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Your Name',
  url: 'http://localhost:3000',
  jobTitle: 'Web Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Your Company',
  },
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </div>
  );
}
