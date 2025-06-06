import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export const Prose = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(className, 'prose prose-zinc w-full dark:prose-dark')}
    >
      {children}
    </div>
  );
};
