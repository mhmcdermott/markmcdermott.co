import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import Prism from 'prismjs';
import { useEffect } from 'react';

import { LinkedInIcon } from '../../components/icons/LinkedInIcon';
import { NoteLayout } from '../../components/notes/NoteLayout';
import { NotionBlockRenderer } from '../../components/notion/NotionBlockRenderer';
import { Note as NoteType, notesApi } from '../../lib/notesApi';

type Props = {
  note: NoteType;
  noteContent: any[];
};

export default function Note({
  note,
  noteContent,
  previousPathname,
}: Props & { previousPathname: string }) {
  const { title, description, createdAt, slug, seoTitle, metaDescription, excerpt, readingTime, wordCount } = note;
  const url = `${process.env.NEXT_PUBLIC_URL}/notes/${slug}`;
  
  // Use SEO-specific fields if available, fallback to regular fields
  const pageTitle = seoTitle || title;
  const pageDescription = metaDescription || description;
  
  const openGraphImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/og?${new URLSearchParams({
    title: pageTitle,
    description: pageDescription,
  }).toString()}`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={url}
        openGraph={{
          title: pageTitle,
          description: excerpt || pageDescription,
          images: [{ url: openGraphImageUrl }],
        }}
      />
      <ArticleJsonLd
        url={url}
        images={[openGraphImageUrl]}
        title={title}
        datePublished={createdAt}
        authorName="Mark McDermott"
        description={pageDescription}
      />
      <NoteLayout
        meta={{ title, description, date: createdAt, readingTime, coverImage: note.coverImage }}
        previousPathname={previousPathname}
      >
        <div className="pb-8">
          {noteContent.map((block) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}

          <hr />

          <a
            className="group block text-base font-semibold no-underline"
            href="https://www.linkedin.com/in/mhmcdermott/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-3 cursor-pointer duration-200 ease-in-out group-hover:text-primary">
              <LinkedInIcon className="h-6 w-6 transform transition-transform group-hover:scale-110 text-primary" />
              <span>Connect with me on LinkedIn</span>
            </div>
          </a>
        </div>
      </NoteLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug;
  const allNotes = await notesApi.getNotes();
  const note = allNotes.find((note) => note.slug === slug);

  if (!note) {
    return {
      notFound: true,
    };
  }

  const noteContent = await notesApi.getNote(note.id);

  return {
    props: {
      note,
      noteContent,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await notesApi.getNotes();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  };
};
