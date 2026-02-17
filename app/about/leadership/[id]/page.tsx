import { directors } from '@/app/data/directors';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Award, Quote } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return directors.map((director) => ({
        id: director.id,
    }));
}

export default async function DirectorPage(props: PageProps) {
    const { id } = await props.params;
    const director = directors.find((d) => d.id === id);

    if (!director) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Navigation */}
                <Link
                    href="/about/leadership"
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#DC833D] transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Leadership
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Image & Quick Info */}
                    <div className="col-span-1 lg:col-span-4 space-y-8">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 shadow-xl">
                            {/* Placeholder or Actual Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <span className="text-lg">Photo</span>
                            </div>
                            {/* <Image 
                 src={director.image || '/placeholder-director.jpg'} 
                 alt={director.name} 
                 fill 
                 className="object-cover"
               /> */}
                        </div>

                        <div className="bg-[#FAFAFA] dark:bg-zinc-900 p-8 rounded-2xl">
                            <h3 className="text-sm font-bold tracking-widest text-[#DC833D] uppercase mb-4">Credentials</h3>
                            <ul className="space-y-4">
                                {director.credentials.map((credential, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <Award className="w-5 h-5 text-[#DC833D] shrink-0 mt-0.5" />
                                        <span className="text-sm leading-relaxed">{credential}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Biography content */}
                    <div className="col-span-1 lg:col-span-8">
                        <h1 className="text-4xl md:text-5xl font-serif text-black dark:text-white mb-2">{director.name}</h1>
                        <p className="text-xl text-[#DC833D] font-medium mb-10">{director.title}</p>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="lead text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                {director.fullBio.split('.')[0]}.
                            </p>

                            <div className="pl-6 border-l-4 border-[#DC833D]/30 italic text-gray-500 my-10">
                                <Quote className="w-8 h-8 text-[#DC833D] mb-4 opacity-50" />
                                "Leadership is about vision and responsibility. We are committed to steering Abuja International Hotels towards a future of sustainable luxury."
                            </div>

                            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                                <p>
                                    {director.fullBio}
                                </p>
                                <p>
                                    (Additional paragraphs regarding their professional journey, key achievements, and specific contributions to the hospitality sector would go here. This section is designed to handle rich text content provided by the client.)
                                </p>
                                <h3 className="text-2xl font-serif text-black dark:text-white mt-12 mb-4">Vision & Philosophy</h3>
                                <p>
                                    Under their guidance, the board focuses on long-term value creation, ensuring that every guest experience reflects the core values of the organization.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
