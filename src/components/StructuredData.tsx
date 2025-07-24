import Head from 'next/head';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data),
        }}
      />
    </Head>
  );
}

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mark McDermott',
  jobTitle: 'CEO & Co-Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'ScreenCloud',
    url: 'https://screencloud.com',
  },
  url: 'https://www.markmcdermott.co',
  image: 'https://www.markmcdermott.co/api/og?title=Mark%20McDermott&description=CEO%20%26%20Co-Founder%20of%20ScreenCloud', // Dynamic OG image as placeholder
  description:
    'CEO & Co-Founder of ScreenCloud. Building digital products that make workplace communication better.',
  knowsAbout: [
    'Digital Signage',
    'SaaS',
    'Enterprise Software',
    'Digital Product Development',
    'Workplace Communication',
    'Team Leadership',
    'Startup Growth',
    'Web Development',
  ],
  addressLocality: 'London',
  addressCountry: 'GB',
  sameAs: [
    'https://www.linkedin.com/in/mhmcdermott',
    'https://twitter.com/mr_mcd',
    'https://www.instagram.com/mhmcdermott',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Exeter',
  },
  award: [
    'Co-founded ScreenCloud, empowering 10,000+ businesses worldwide',
    'Led digital agency serving Microsoft, BBC, and Nestlé',
  ],
};