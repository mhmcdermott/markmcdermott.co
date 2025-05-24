import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';

import AvatarImage from '../../public/assets/blog/authors/mcd.png';
import { Container } from '../components/Container';
import { ExternalLink } from '../components/ExternalLink';
import { PageTitle } from '../components/PageTitle';
import { Quote } from '../components/Quote';
import { Section } from '../components/Section';
import { SocialLink } from '../components/SocialLink';
import {
  AboutExtended,
  Quotes,
  SocialMedia,
} from '../data/lifeApi';

const seoTitle = `Mark McDermott : About me`;
const seoDescription = `Hello, I'm Mark McDermott, CEO and Co-Founder of ScreenCloud. Based in London, UK`;

export default function AboutMe() {
  const randomQuote = useMemo(() => Quotes[Math.floor(Math.random() * Quotes.length)], []);

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/about`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={AvatarImage}
                alt="Mark McDermott"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <PageTitle>Hi, I&apos;m Mark</PageTitle>
            <div className="mt-6 text-base">
              How many times have you seen digital signs displaying a black screen, error message or an eternal loop of the same images? I&apos;m the Co-Founder & CEO of <ExternalLink href="https://screencloud.com">ScreenCloud</ExternalLink>, a global digital signage platform empowering 10,000+ businesses to share meaningful content through screens.
              <br /><br />
              From offices to factories, thousands of screens globally aren&apos;t being used to their full potential. With digital signs, companies have the opportunity to communicate to the right audience, at the right time and in the right location using screens that they already own.
              <br /><br />
              Founded in 2015 and with offices in LA & Charlotte, London & Belfast, and Bangkok, we&apos;re helping customers unlock the power of their digital signage with screens that communicate. ScreenCloud was born out of a prototype in Codegent Labs in early 2014 as we were frustrated by how hard it was to push content to the screens in our office – a problem shared by most of our corporate clients.
              <br /><br />
              In April 2025, we secured strategic investment from European tech investor <ExternalLink href="https://tenzing.pe">Tenzing</ExternalLink> to accelerate our global expansion and explore M&A opportunities in the digital signage space.
              <br /><br />
              Based in London, UK.
            </div>
            <div className="mt-6 flex gap-6">
              <SocialLink
                aria-label="Follow on LinkedIn"
                href="https://www.linkedin.com/in/mhmcdermott"
                icon={LinkedInIcon}
              />
              <SocialLink
                aria-label="Follow on Twitter"
                href="https://twitter.com/mr_mcd"
                icon={TwitterIcon}
              />
              <SocialLink
                aria-label="Follow on Instagram"
                href="https://www.instagram.com/mhmcdermott"
                icon={InstagramIcon}
              />
            </div>

            <Section>
              <Section.Title as="h2">Work history</Section.Title>
              <Section.Content>
                Previously, I co-founded <ExternalLink href="https://www.codegent.com">Codegent</ExternalLink>, a digital product studio where we worked with clients such as BBC, British Airways, Microsoft and Nestlé. I was also a Co-Founder of <ExternalLink href="https://www.youtube.com/watch?v=NnlFyVRnj9U">Tepilo</ExternalLink>, an Online Estate Agency we started with Sarah Beeny, and helped manage <ExternalLink href="https://www.thinmartian.com">Thin Martian</ExternalLink>, which operated as Codegent&apos;s client services division.
              </Section.Content>
            </Section>

            <Section>
              <Section.Title as="h2">Education</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  <li>Goldman Sachs 10,000 Small Businesses Programme (2014)</li>
                  <li>University of Exeter - BA in History & Society (2000)</li>
                  <li>Dulwich College - Secondary Education (1997)</li>
                </ul>
              </Section.Content>
            </Section>

            <Section>
              <Section.Title as="h2">Personal interests</Section.Title>
              <Section.Content>
                <p>
                  Until recently I served as a Les Mills BODYPUMP Group Fitness Instructor. I&apos;m passionate about team sports, having played university and London league hockey for many years. A lifelong Manchester United supporter, I also enjoy international travel, house music, fine dining, and spending quality time with friends and family.
                </p>
              </Section.Content>
            </Section>

            <Section>
              <Section.Title as="h2">Quote worth thinking about</Section.Title>
              <Section.Content>
                <div className="mt-8">
                  <Quote quote={randomQuote.content} author={randomQuote.author} />
                </div>
              </Section.Content>
            </Section>
          </div>
        </div>
      </Container>
    </>
  );
}

// These are placeholders for the social icons. You would need to import these from your icon library or define them.
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
    <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
    <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
    <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
  </svg>
);