import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dwshotels.com'; // Replace with actual domain

    // Base routes
    const routes = [
        '',
        '/rooms',
        '/about',
        '/contact',
        '/properties',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic routes (Rooms)
    // In a real app, you would fetch these IDs from your API/CMS
    const roomIds = [1, 2, 3, 4, 5, 6];
    const roomRoutes = roomIds.map((id) => ({
        url: `${baseUrl}/rooms/${id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...routes, ...roomRoutes];
}
