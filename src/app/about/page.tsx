import AboutClientPage from './AboutClientPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my skills, experience, and background.',
};

const AboutPage = () => {
  return <AboutClientPage />;
};

export default AboutPage;