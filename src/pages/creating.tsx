import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import { PageLayout } from '../components/PageLayout';
import { LinkIcon } from '../components/icons/LinkIcon';
import { MyCurrentProjects, MyPastProjects, Project } from '../data/lifeApi';

const seoTitle = 'Creating';
const seoDescription = "Things I've made trying to put my dent in the universe.";

const ProjectCard = (project: Project) => {
  return (
    <Card key={project.title}>
      <div className="relative z-10 flex h-16 w-16 p-2 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={project.logo}
          alt={`Logo of ${project.title}`}
          className="h-10 w-10 object-cover"
          unoptimized
        />
      </div>
      <div className="mt-6">
        {project.link ? (
          <Card.Title href={project.link.href}>{project.title}</Card.Title>
        ) : (
          <Card.Title>{project.title}</Card.Title>
        )}
      </div>
      <Card.Description>{project.description}</Card.Description>
      <p className="mt-6 font-mono flex flex-wrap gap-1 z-10 mb-6">
        {project.techStack.map((techStackItem) => (
          <Badge key={techStackItem}>{techStackItem}</Badge>
        ))}
      </p>
      <div className="relative z-10 mt-auto flex text-sm font-medium text-zinc-400 transition group-hover:text-primary dark:text-zinc-200">
        {project.link ? (
          <p className="flex items-center">
            <LinkIcon className="h-6 w-6 flex-none" />
            <span className="ml-2">{project.link.label}</span>
            <span className="ml-2 rounded-full bg-green-700 w-1 h-1" />
          </p>
        ) : (
          <p className="text-zinc-400 flex items-center gap-x-2">
            Shut down <span className="rounded-full bg-red-700 w-1 h-1" />
          </p>
        )}
      </div>
    </Card>
  );
};

export default function Creating() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/projects`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <PageLayout
        title="Things I've made trying to put my dent in the universe."
        intro="A list of projects I've worked on, I'm working on and I will work on."
      >
        <h2 className="text-2xl font-bold tracking-tight">Now</h2>
        <p className="mt-2 text-base">Projects I currently work on.</p>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MyCurrentProjects.map((project, idx) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.li>
          ))}
        </ul>

        <h2 className="mt-24 text-2xl font-bold tracking-tight">Past</h2>
        <p className="mt-2 text-base">
          Projects I worked on. Due to nature of internet businesses not all of them are still
          online.
        </p>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MyPastProjects.map((project, idx) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ProjectCard key={project.title} {...project} />
            </motion.li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
}
