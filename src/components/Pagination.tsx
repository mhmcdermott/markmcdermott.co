import Link from 'next/link';
import clsx from 'clsx';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const pageNumbers = [];
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const getPageUrl = (page: number) => {
    return page === 1 ? basePath : `${basePath}?page=${page}`;
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-center mt-16 mb-8">
      <div className="flex items-center gap-1">
        {/* Previous button */}
        {currentPage > 1 && (
          <Link
            href={getPageUrl(currentPage - 1)}
            className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            ← Previous
          </Link>
        )}

        {/* First page + ellipsis */}
        {startPage > 1 && (
          <>
            <Link
              href={getPageUrl(1)}
              className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              1
            </Link>
            {startPage > 2 && <span className="px-2 text-zinc-400">...</span>}
          </>
        )}

        {/* Page numbers */}
        {pageNumbers.map((number) => (
          <Link
            key={number}
            href={getPageUrl(number)}
            className={clsx(
              'px-3 py-2 text-sm font-medium transition-colors',
              currentPage === number
                ? 'text-primary border-b-2 border-primary'
                : 'text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary'
            )}
          >
            {number}
          </Link>
        ))}

        {/* Last page + ellipsis */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-2 text-zinc-400">...</span>}
            <Link
              href={getPageUrl(totalPages)}
              className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {totalPages}
            </Link>
          </>
        )}

        {/* Next button */}
        {currentPage < totalPages && (
          <Link
            href={getPageUrl(currentPage + 1)}
            className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Next →
          </Link>
        )}
      </div>
    </nav>
  );
}