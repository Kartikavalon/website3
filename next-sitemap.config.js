/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kaytherix.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 50000,
  exclude: ['/_not-found', '/404'],
  robotsTxtOptions: {
    sitemaps: [
      'https://kaytherix.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api'],
      },
    ],
  },
};
