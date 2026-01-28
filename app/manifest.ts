import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'DWS Hotels',
        short_name: 'DWS Hotels',
        description: 'Luxury Stay in Abraka',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
