import PortfolioClientPage from './PortfolioClientPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A collection of my projects.',
};

const PortfolioPage = () => {
  return <PortfolioClientPage />;
};

export default PortfolioPage;