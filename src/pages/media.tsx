import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { MediaItem } from '../components/media/MediaItem';
import { MediaSection } from '../components/media/MediaSection';
import { MediaAppearances } from '../data/lifeApi';

const seoTitle = 'Mark McDermott : Media appearances';
const seoDescription = 'Mark McDermott has appeared on a number of media platforms.';

export default function Media() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/media`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <PageLayout
  title="Insights & industry perspectives"
  intro="Sharing my thoughts on digital signage, workplace communications, and entrepreneurship through podcasts, interviews, speaking engagements, and video content."
>
        <div className="space-y-20">
          {Object.entries(MediaAppearances).map(([category, items]) => (
            <MediaSection key={category} title={category}>
              {items.map((item) => (
                <MediaItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </MediaItem>
              ))}
            </MediaSection>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
