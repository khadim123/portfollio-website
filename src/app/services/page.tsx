import ServicesClientPage from './ServicesClientPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'A list of services I offer.',
};

const ServicesPage = () => {
  return <ServicesClientPage />;
};

export default ServicesPage;