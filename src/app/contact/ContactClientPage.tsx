'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactClientPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Hidden field for spam prevention
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.honeypot) {
      // It's a bot
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        console.error(data.message);
      }
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
      >
        Get in Touch
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 max-w-xl mx-auto"
      >
        <div className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Subject"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="hidden">
            <label htmlFor="honeypot">
              Do not fill this out if you are human
            </label>
            <input
              type="text"
              name="honeypot"
              id="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {status === 'success' && (
          <p className="mt-4 text-center text-green-600">
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default ContactClientPage;