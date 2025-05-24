import { useId } from 'react';
import Image from 'next/image';
import { mediaIcons } from '../../images/media';

export const MediaSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  let id = useId();
  const icon = mediaIcons[title as keyof typeof mediaIcons];

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-6 md:gap-x-6">
        <div className="flex items-center gap-3 md:col-span-2">
          {icon && (
            <div className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={icon}
                alt={`${title} icon`}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          )}
          <h2 id={id} className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            {title}
          </h2>
        </div>
        <div className="md:col-span-4">
          <ul role="list" className="space-y-16">
            {children}
          </ul>
        </div>
      </div>
    </section>
  );
};