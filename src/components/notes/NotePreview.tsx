import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

import { formatDate } from '../../lib/date';
import { Note } from '../../lib/notesApi';
import { Card } from '../Card';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';

const StaticBadge = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => (
  <span
    className={clsx(
      className,
      'inline-flex items-center rounded-md bg-primary px-2 py-0 text-xs font-medium text-white',
    )}
  >
    {children}
  </span>
);

interface Props {
  note: Note;
  dense?: boolean;
  showCoverImage?: boolean;
}

export const NotePreview = ({ note, dense, showCoverImage = false }: Props) => {
  return (
    <motion.div
      initial={ANIMATION_FROM_PROPS}
      whileInView={ANIMATION_TO_PROPS}
      viewport={{ once: true }}
    >
      <article className="md:grid md:grid-cols-4 md:items-start md:gap-4">
        {!dense && (
          <time dateTime={note.publishedAt} className="hidden md:block md:col-span-1 text-sm text-zinc-400 dark:text-zinc-500">
            <div className="flex flex-col">
              <span>{formatDate(note.publishedAt)}</span>
              {note.readingTime && (
                <span className="text-sm text-zinc-400 dark:text-zinc-500">{note.readingTime} min read</span>
              )}
            </div>
            {note.inProgress && <StaticBadge className="mt-2">Work in progress</StaticBadge>}
          </time>
        )}
        <Card className="md:col-span-3">
          {showCoverImage && note.coverImage && (
            <div className="relative z-10 w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src={note.coverImage}
                alt={note.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <Card.Title href={`/notes/${note.slug}`}>{note.title}</Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={note.publishedAt}
            className={clsx(!dense && 'md:hidden')}
            decorate
          >
            {formatDate(note.publishedAt)}
            {note.readingTime && (
              <>
                <span className="mx-2 text-zinc-300 dark:text-zinc-600">•</span>
                <span>{note.readingTime} min read</span>
              </>
            )}
            {note.inProgress && <StaticBadge className="ml-4">Work in progress</StaticBadge>}
          </Card.Eyebrow>
          <Card.Description>{note.description}</Card.Description>
          <Card.Cta>Read note</Card.Cta>
        </Card>
      </article>
    </motion.div>
  );
};
