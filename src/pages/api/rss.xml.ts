import { NextApiHandler } from 'next';
import RSS from 'rss';

import { notesApi } from '../../lib/notesApi';

const rss: NextApiHandler = async (req, res) => {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
  const feed = new RSS({
    title: 'Mark McDermott',
    site_url: 'https://www.markmcdermott.co',
    feed_url: 'https://www.markmcdermott.co/rss.xml',
  });

  const allPosts = await notesApi.getNotes();
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://www.markmcdermott.co/notes/${post.slug}`,
      date: post.publishedAt,
      description: post.description,
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  res.write(feed.xml({ indent: true }));
  res.end();
  } catch (error) {
    console.error('RSS feed generation error:', error);
    res.status(500).json({ message: 'Failed to generate RSS feed' });
  }
};

export default rss;
