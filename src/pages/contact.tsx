import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { PageLayout } from '../components/PageLayout';
import { SocialLink } from '../components/SocialLink';
import { SocialMedia } from '../data/lifeApi';

const seoTitle = 'Contact';
const seoDescription = 'Get in touch with Mark McDermott for business inquiries, speaking engagements, or collaboration opportunities.';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

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
        setSubmitStatus('success');
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', data.error);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/contact`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?${new URLSearchParams({
                title: seoTitle,
                description: seoDescription,
              }).toString()}`,
            },
          ],
        }}
      />
      <PageLayout
        title="Let&apos;s connect"
        intro="Whether you&apos;re interested in digital signage solutions, speaking engagements, or exploring collaboration opportunities, I&apos;d love to hear from you."
      >
        <div className="mx-auto max-w-2xl space-y-16">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-900 dark:text-zinc-100 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-900 dark:text-zinc-100 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-900 dark:text-zinc-100 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                  Thank you for your message! I&apos;ll get back to you soon.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email directly.
                </p>
              )}
            </div>
          </form>

          <div className="border-t border-zinc-100 dark:border-zinc-700/40 pt-8">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Connect on social media
            </h2>
            <ul role="list" className="mt-4 flex gap-6">
              {SocialMedia.map((socialProfile) => (
                <SocialLink
                  key={socialProfile.name}
                  aria-label={`Follow on ${socialProfile.name}`}
                  href={socialProfile.link}
                  icon={socialProfile.icon}
                />
              ))}
            </ul>
          </div>
        </div>
      </PageLayout>
    </>
  );
}