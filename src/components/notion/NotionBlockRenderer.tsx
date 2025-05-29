import { TextRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import Prism from '../../lib/prism';
import { Quote } from '../Quote';

//TODO: improve types here, cleanup the code
type Props = {
  block: any;
};

export const NotionBlockRenderer = ({ block }: Props) => {
  const { type, id } = block;
  const value = block[type];

  useEffect(() => {
    Prism.highlightAll();
  }, [block]);

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <NotionText textItems={value.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <NotionText textItems={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <NotionText textItems={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <NotionText textItems={value.rich_text} />
        </h3>
      );
    case 'bulleted_list':
      return (
        <ul className="list-outside list-disc">
          {value.children.map((block: any) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}
        </ul>
      );
    case 'numbered_list':
      return (
        <ol className="list-outside list-decimal">
          {value.children.map((block: any) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}
        </ol>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className="pl-0">
          <NotionText textItems={value.rich_text} />
          {!!value.children &&
            value.children.map((block: any) => (
              <NotionBlockRenderer key={block.id} block={block} />
            ))}
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <NotionText textItems={value.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <NotionText textItems={value.rich_text} />
          </summary>
          {value.children?.map((block: any) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <Image
            className="object-cover"
            placeholder="blur"
            src={src}
            alt={caption}
            blurDataURL={value.placeholder}
            width={value.size.width}
            height={value.size.height}
          />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case 'divider':
      return <hr key={id} />;
    case 'quote':
      return <Quote key={id} quote={value.rich_text[0].plain_text} />;
    case 'code':
      return (
        <pre className={`language-${value.language}`}>
          <code key={id}>{value.rich_text[0].plain_text}</code>
        </pre>
      );
    case 'file':
      const src_file = value.type === 'external' ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <div>
            📎{' '}
            <Link href={src_file} passHref>
              {lastElementInArray.split('?')[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case 'bookmark':
      const href = value.url;
      return (
        <a href={href} target="_brank">
          {href}
        </a>
      );
    case 'video':
      if (value.type === 'external' && value.external.url) {
        const videoUrl = value.external.url;
        // Check if it's a YouTube URL
        const youtubeMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/);
        if (youtubeMatch) {
          const videoId = youtubeMatch[1];
          return (
            <div className="relative aspect-video my-8">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          );
        }
      }
      return <div>Video: {value.external?.url || 'Unsupported video'}</div>;
    case 'embed':
      const embedUrl = value.url;
      // Check if it's a YouTube URL
      const youtubeEmbedMatch = embedUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/);
      if (youtubeEmbedMatch) {
        const videoId = youtubeEmbedMatch[1];
        return (
          <div className="relative aspect-video my-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        );
      }
      // For other embeds, try to render in an iframe
      return (
        <div className="relative aspect-video my-8">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={embedUrl}
            title="Embedded content"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      );
    default:
      return (
        <>❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})</>
      );
  }
};

const NotionText = ({ textItems }: { textItems: TextRichTextItemResponse[] }) => {
  if (!textItems) {
    return null;
  }

  return (
    <>
      {textItems.map((textItem) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = textItem;
        return (
          <span
            key={text.content}
            className={clsx({
              'font-bold': bold,
              'font-mono font-semibold bg-zinc-600 text-zinc-200 px-1 py-0.5 m-1 rounded-md': code,
              italic: italic,
              'line-through': strikethrough,
              underline: underline,
            })}
            style={color !== 'default' ? { color } : {}}
          >
            {text.link ? (
              text.link.url.startsWith('http://') || text.link.url.startsWith('https://') ? (
                <a href={text.link.url} target="_blank" rel="noopener noreferrer">{text.content}</a>
              ) : (
                <Link href={text.link.url}>{text.content}</Link>
              )
            ) : text.content}
          </span>
        );
      })}
    </>
  );
};
