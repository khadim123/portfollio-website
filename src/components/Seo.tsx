import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
}

const SEO: React.FC<SeoProps> = ({
  title,
  description,
  ogType = 'website',
  ogImage = '/og-image.png',
  twitterCard = 'summary_large_image',
}) => {
  const siteTitle = 'My Portfolio';
  const fullTitle = `${title} | ${siteTitle}`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Head>
  );
};

export default SEO;