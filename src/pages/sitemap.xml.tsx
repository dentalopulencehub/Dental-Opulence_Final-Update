import { GetServerSideProps } from 'next';
import { blogPosts } from '../../constants';

const DOMAIN = 'https://www.do.co.uk';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

function generateSiteMap(urls: SitemapUrl[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(({ loc, lastmod, changefreq, priority }) => {
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;
}

function SiteMap() {
  // This component doesn't render anything, it only serves the sitemap
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const currentDate = new Date().toISOString();

  const urls: SitemapUrl[] = [
    // Main pages
    { loc: `${DOMAIN}/`, lastmod: currentDate, changefreq: 'weekly', priority: 1.0 },
    { loc: `${DOMAIN}/about`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: `${DOMAIN}/services`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: `${DOMAIN}/contact`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/testimonials`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { loc: `${DOMAIN}/cases`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { loc: `${DOMAIN}/our-pricing`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${DOMAIN}/blog`, lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { loc: `${DOMAIN}/sitemap`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },

    // Cosmetic Treatment Services
    { loc: `${DOMAIN}/services/cosmeticTreatment/composite-bonding`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/cosmeticTreatment/composite-edge-bonding`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/cosmeticTreatment/teeth-whitening`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/cosmeticTreatment/composite-veneers`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/cosmeticTreatment/crowns-veneers`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/cosmeticTreatment/invisalign`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/cosmeticTreatment/implants`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/cosmeticTreatment/fixed-retainers`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${DOMAIN}/services/cosmeticTreatment/vivera-retainers`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${DOMAIN}/services/cosmeticTreatment/internal-tooth-whitening`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${DOMAIN}/services/cosmeticTreatment/routine-examination`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },

    // General Treatment Services
    { loc: `${DOMAIN}/services/generalTreatment/white-fillings`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/generalTreatment/dentures`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/generalTreatment/hygienist`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/generalTreatment/root-canal-treatments`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/generalTreatment/extractions`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${DOMAIN}/services/generalTreatment/examination`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${DOMAIN}/services/generalTreatment/scale-and-polish`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${DOMAIN}/services/generalTreatment/sedation`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${DOMAIN}/services/generalTreatment/bridges`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },

    // Legal & Policy pages
    { loc: `${DOMAIN}/privacy-policy`, lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { loc: `${DOMAIN}/cookie-policy`, lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { loc: `${DOMAIN}/terms-of-use`, lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { loc: `${DOMAIN}/data-protection`, lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { loc: `${DOMAIN}/complaints-procedure`, lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { loc: `${DOMAIN}/health-and-safety`, lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { loc: `${DOMAIN}/appointment-terms`, lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { loc: `${DOMAIN}/competitions-and-offer-terms`, lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
  ];

  // Add blog post URLs dynamically
  const blogUrls: SitemapUrl[] = blogPosts.map((post) => ({
    loc: `${DOMAIN}/blog/${post.slug}`,
    lastmod: post.date,
    changefreq: 'monthly',
    priority: 0.7,
  }));

  const allUrls = [...urls, ...blogUrls];
  const sitemap = generateSiteMap(allUrls);

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
