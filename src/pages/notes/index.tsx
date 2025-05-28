import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { Badge } from '../../components/Badge';
import { PageLayout } from '../../components/PageLayout';
import { NotePreview } from '../../components/notes/NotePreview';
import { Note, notesApi } from '../../lib/notesApi';
import { Pagination } from '../../components/Pagination';

const seoTitle = 'Notes';
const seoDescription =
  'From time to time I will write up some personal reflections on various topics and post them. An old school blog!';

const POSTS_PER_PAGE = 10;

interface Props {
  notes: Note[];
  tags: Array<string>;
  currentPage: number;
  totalPages: number;
}

export default function Notes({ notes, tags, currentPage, totalPages }: Props) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/notes`}
        openGraph={{
          images: [{ 
            url: `${process.env.NEXT_PUBLIC_URL}/api/og?${new URLSearchParams({
              title: seoTitle,
              description: seoDescription,
            }).toString()}` 
          }],
        }}
      />
        <PageLayout
          title="Work, life, & everything in between"
          intro="From time to time I will write up some personal reflections on various topics and post them. An old school blog!"
        >
        {/* Mobile: Tags above notes */}
        <div className="md:hidden">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Tags</h3>
          <div className="mt-4 flex flex-wrap gap-1 font-mono">
            {tags.map((tag) => (
              <Badge key={tag} href={`/tags/${tag}`}>
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Desktop: Two column layout */}
        <div className="mt-24 md:grid md:grid-cols-12 md:gap-8">
          {/* Notes column */}
          <div className="md:col-span-8">
            <div className="flex max-w-3xl flex-col space-y-16">
              {notes.map((note) => (
                <NotePreview key={note.slug} note={note} showCoverImage />
              ))}
            </div>
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              basePath="/notes" 
            />
          </div>

          {/* Tags sidebar */}
          <aside className="hidden md:block md:col-span-4">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Tags</h3>
              <div className="mt-4 flex flex-wrap gap-1 font-mono">
                {tags.map((tag) => (
                  <Badge key={tag} href={`/tags/${tag}`}>
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </PageLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const page = typeof query.page === 'string' ? parseInt(query.page, 10) : 1;
  const validPage = isNaN(page) || page < 1 ? 1 : page;
  
  const { notes, totalPages, currentPage } = await notesApi.getNotesWithPagination(
    validPage,
    POSTS_PER_PAGE,
    'desc'
  );

  // Get all notes to extract all tags (not just from current page)
  const allNotes = await notesApi.getNotes('desc');
  const allTags = Array.from(new Set(allNotes.map((post) => post.tags).flat()));

  // Redirect if page number is out of bounds
  if (validPage > totalPages && totalPages > 0) {
    return {
      redirect: {
        destination: '/notes',
        permanent: false,
      },
    };
  }

  return {
    props: {
      notes,
      tags: allTags,
      currentPage,
      totalPages,
    },
  };
};
