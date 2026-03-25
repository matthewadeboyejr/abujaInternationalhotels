import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://abujainternationalhotels.com';

    // Base routes and pages
    const routes = [
        '',
        '/about/overview',
        '/about/history',
        '/about/leadership',
        '/about/corporate-governance',
        '/about/photo-gallery',
        '/investors/overview',
        '/investors/stock-information',
        '/investors/key-materials',
        '/investors/corporate-responsibility',
        '/investors/faqs',
        '/careers',
        '/contact',
        '/terms',
        '/privacy',
        '/site-map'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes];
}
