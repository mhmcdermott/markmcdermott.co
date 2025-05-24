import { Analytics } from '@vercel/analytics/react';
import 'focus-visible';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React, { useEffect, useRef } from 'react';
import { DefaultSeo } from 'next-seo';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/index.css';
import '../styles/prism.css';

function usePrevious(value: string) {
  let ref = useRef<string>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname);

  const defaultTitle = 'Mark McDermott';
  const defaultDescription = 'CEO & Co-Founder of ScreenCloud. Building digital products that make workplace communication better.';
  const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://markmcdermott.co';
  const defaultOGImage = `${siteUrl}/api/og?${new URLSearchParams({
    title: defaultTitle,
    description: defaultDescription,
  }).toString()}`;

  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Mark McDermott"
        defaultTitle={defaultTitle}
        description={defaultDescription}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: siteUrl,
          site_name: 'Mark McDermott',
          title: defaultTitle,
          description: defaultDescription,
          images: [
            {
              url: defaultOGImage,
              width: 1200,
              height: 630,
              alt: 'Mark McDermott',
            },
          ],
        }}
        twitter={{
          handle: '@markymcd',
          site: '@markymcd',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'author',
            content: 'Mark McDermott',
          },
          {
            name: 'theme-color',
            content: '#FB2576',
          },
        ]}
      />
      <ThemeProvider attribute="class">
        <div>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>
              <Component previousPathname={previousPathname} {...pageProps} />
            </main>
            <Footer />
          </div>
          <Analytics />
        </div>
      </ThemeProvider>
    </>
  );
}
