import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { ProjectCard } from '../components/ProjectCard';
import { WorkExperience } from '../data/lifeApi';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../lib/animation';

const seoTitle = 'Mark McDermott : Work history';
const seoDescription = "From digital agencies and IT consulting to building global SaaS platforms.";

export default function Work() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/work`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <PageLayout
  title="Digital ventures & career milestones"
  intro="From digital agencies and IT consulting to building global SaaS platforms, these are the ventures and roles that have shaped my journey in digital product development and entrepreneurship."
>
        
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WorkExperience.map((experience) => (
            <motion.li
              key={experience.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
            >
              <ProjectCard project={experience} />
            </motion.li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
}
