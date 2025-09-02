import React from 'react';
import Link from 'next/link';

const socialLinks = [
  { href: 'https://github.com', label: 'GitHub', icon: 'github' },
  { href: 'https://twitter.com', label: 'Twitter', icon: 'twitter' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
];

const sitemapLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Name</h3>
            <p className="text-gray-500 dark:text-gray-400">
              A brief bio or tagline about yourself.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <span className="sr-only">{link.label}</span>
                  {/* Add your SVG icons here */}
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sitemap</h3>
            <ul className="mt-4 space-y-2">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Info</h3>
            <div className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
              <p>Email: your.email@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;