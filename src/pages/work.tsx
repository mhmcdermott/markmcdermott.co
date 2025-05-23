import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { ProjectCard } from '../components/ProjectCard';
import { MyCurrentProjects } from '../data/lifeApi';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../lib/animation';

const seoTitle = 'Mark McDermott : Work History';
const seoDescription = "From digtial agencies and IT consulting to building global SaaS platforms.";

export default function Creating() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/creating`}
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
  intro="From digtial agencies and IT consulting to building global SaaS platforms, these are the ventures and roles that have shaped my journey in digital product development and entrepreneurship."
>
        
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MyCurrentProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
}
