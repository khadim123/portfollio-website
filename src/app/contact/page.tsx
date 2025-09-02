import ContactClientPage from './ContactClientPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me.',
};

const ContactPage = () => {
  return <ContactClientPage />;
};

export default ContactPage;
