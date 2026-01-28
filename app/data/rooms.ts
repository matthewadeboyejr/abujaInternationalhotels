export const ROOMS = [
    {
        id: 1,
        category: 'Deluxe',
        image: '/deluxe-home.jpeg',
        images: ['/deluxe-home.jpeg', '/superior-home.jpeg', '/executive-home.jpeg', '/royal-home.jpeg'],
        date: 'Dec 19, 2023',
        title: 'Deluxe Room for you',
        price: 'NGN40,000',
        rating: '4.5',
        amenities: ['1 King + 2', '3 Attached Bath', '100Mbps'],
        description: 'Experience comfort like never before in our Deluxe Room. Designed for relaxation and productivity, this room features a spacious layout with modern amenities. Enjoy a peaceful night\'s sleep on our premium king-sized bed and wake up to a stunning view of the city. Perfect for solo travelers or couples seeking a touch of luxury.',
        stats: {
            bedrooms: 1,
            bathrooms: 1,
            guests: 2,
            area: '350 sqft'
        },
        features: [
            { icon: 'Wifi', title: 'Free Wifi', desc: 'High-speed internet access' },
            { icon: 'Wind', title: 'Air Conditioning', desc: 'Climate control for your comfort' },
            { icon: 'Tv', title: 'Smart TV', desc: 'Entertainment at your fingertips' },
            { icon: 'Coffee', title: 'Coffee Maker', desc: 'Fresh brew every morning' }
        ]
    },
    {
        id: 2,
        category: 'Superior',
        image: '/superior-home.jpeg',
        images: ['/superior-home.jpeg', '/deluxe-home.jpeg', '/executive-home.jpeg', '/royal-home.jpeg'],
        date: 'Dec 20, 2023',
        title: 'Superior living experience',
        price: 'NGN45,000',
        rating: '4.7',
        amenities: ['2 King', '2 Attached Bath', '200Mbps'],
        description: 'Upgrade your stay with our Superior Room, offering extra space and enhanced amenities. Ideal for families or those who need a bit more room to spread out. The elegant decor and thoughtful touches create a warm and inviting atmosphere.',
        stats: {
            bedrooms: 1,
            bathrooms: 1,
            guests: 3,
            area: '400 sqft'
        },
        features: [
            { icon: 'Wifi', title: 'Free Wifi', desc: 'High-speed internet access' },
            { icon: 'Wind', title: 'Air Conditioning', desc: 'Climate control for your comfort' },
            { icon: 'Tv', title: 'Smart TV', desc: 'Entertainment at your fingertips' },
            { icon: 'Refrigerator', title: 'Mini Bar', desc: 'Refreshments available' }
        ]
    },
    {
        id: 3,
        category: 'Executive',
        image: '/executive-home.jpeg',
        images: ['/executive-home.jpeg', '/deluxe-home.jpeg', '/superior-home.jpeg', '/royal-home.jpeg'],
        date: 'Dec 21, 2023',
        title: 'Executive living experience',
        price: 'NGN90,000',
        rating: '4.7',
        amenities: ['2 King', '2 Attached Bath', '200Mbps'],
        description: 'Designed for the business traveler, our Executive Room combines luxury with functionality. Featuring a dedicated workspace, high-speed internet, and access to our executive lounge. Unwind after a busy day in the plush seating area.',
        stats: {
            bedrooms: 1,
            bathrooms: 1,
            guests: 2,
            area: '450 sqft'
        },
        features: [
            { icon: 'Wifi', title: 'Free Wifi', desc: 'High-speed internet access' },
            { icon: 'Briefcase', title: 'Workspace', desc: 'Ergonomic desk and chair' },
            { icon: 'Coffee', title: 'Coffee Maker', desc: 'Premium coffee selection' },
            { icon: 'Lock', title: 'Safe', desc: 'Secure storage for valuables' }
        ]
    },
    {
        id: 4,
        category: 'Royal Suite',
        image: '/royal-home.jpeg',
        images: ['/royal-home.jpeg', '/deluxe-home.jpeg', '/superior-home.jpeg', '/executive-home.jpeg'],
        date: 'Dec 22, 2023',
        title: 'Royal treatment for you',
        price: 'NGN100,000',
        rating: '5.0',
        amenities: ['Master + 2', '3 Ensuite', '1Gbps'],
        description: 'Indulge in royalty with our expansive Royal Suite. This suite features a separate living area, a master bedroom with an ensuite Jacuzzi, and breathtaking views. Experience the pinnacle of luxury and personalized service.',
        stats: {
            bedrooms: 2,
            bathrooms: 2,
            guests: 4,
            area: '800 sqft'
        },
        features: [
            { icon: 'Wifi', title: 'Free Wifi', desc: 'High-speed internet access' },
            { icon: 'Bath', title: 'Jacuzzi', desc: 'Private relaxation' },
            { icon: 'Utensils', title: 'Room Service', desc: '24/7 Dining' },
            { icon: 'Sun', title: 'Balcony', desc: 'Private view' }
        ]
    },
    {
        id: 5,
        category: 'Business Class',
        image: '/business-home.jpeg',
        images: ['/business-home.jpeg', '/deluxe-home.jpeg', '/superior-home.jpeg', '/royal-home.jpeg'],
        date: 'Dec 23, 2023',
        title: 'Perfect business trip',
        price: 'NGN60,000',
        rating: '4.8',
        amenities: ['1 Suite', '1 Attached', 'High Speed'],
        description: 'Our Business Class rooms are tailored for efficiency and comfort. With enhanced connectivity, priority services, and a quiet environment, you can stay productive and relaxed throughout your stay.',
        stats: {
            bedrooms: 1,
            bathrooms: 1,
            guests: 2,
            area: '380 sqft'
        },
        features: [
            { icon: 'Wifi', title: 'Free Wifi', desc: 'High-speed internet access' },
            { icon: 'Printer', title: 'Printing', desc: 'Business center access' },
            { icon: 'Car', title: 'Transfer', desc: 'Airport pickup included' },
            { icon: 'Coffee', title: 'Coffee Maker', desc: 'Premium coffee selection' }
        ]
    },
    {
        id: 6,
        category: 'Platinum',
        image: '/platinum-home.jpeg',
        images: ['/platinum-home.jpeg', '/royal-home.jpeg', '/deluxe-home.jpeg', '/superior-home.jpeg'],
        date: 'Dec 24, 2023',
        title: 'Platinum experience',
        price: 'NGN60,000',
        rating: '4.9',
        amenities: ['Penthouse', '2 Luxury', '500Mbps'],
        description: 'Elevate your stay with our Platinum Experience. Located on the top floor, these rooms offer exclusive amenities, skyline views, and superior comfort. Perfect for those who appreciate the finer details.',
        stats: {
            bedrooms: 1,
            bathrooms: 1,
            guests: 2,
            area: '500 sqft'
        },
        features: [
            { icon: 'Wifi', title: 'Free Wifi', desc: 'High-speed internet access' },
            { icon: 'Star', title: 'Concierge', desc: 'Dedicated service' },
            { icon: 'Wine', title: 'Welcome Drink', desc: 'Complimentary' },
            { icon: 'Music', title: 'Sound System', desc: 'Premium audio' }
        ]
    }
];
