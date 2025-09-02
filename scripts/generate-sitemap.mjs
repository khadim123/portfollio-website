import fs from 'fs';
import path from 'path';

// Define your site's base URL
const siteUrl = 'https://your-domain.com';

// Define your pages
const staticPages = [
  '/',
  '/about',
  '/portfolio',
  '/services',
  '/contact',
];

// Define your dynamic pages (e.g., blog posts, portfolio items)
// You'll need to fetch these from your data source
const dynamicPages = [
  // Example:
  // { slug: 'project-one', lastmod: '2023-01-01' },
  // { slug: 'project-two', lastmod: '2023-01-02' },
];

async function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      const route = page === '/' ? '' : page;
      return `
    <url>
      <loc>${`${siteUrl}${route}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
      `;
    })
    .join('')}
  ${dynamicPages
    .map((page) => {
      return `
    <url>
      <loc>${`${siteUrl}/portfolio/${page.slug}`}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
      `;
    })
    .join('')}
</urlset>`;

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();