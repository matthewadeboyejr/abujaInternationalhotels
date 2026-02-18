'use client';

import { Calendar, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    image?: string;
    isLeft: boolean;
    isLast: boolean;
}

export default function TimelineItem({ year, title, description, image, isLeft, isLast }: TimelineItemProps) {
    return (
        <div className={`relative flex items-center justify-between md:justify-normal w-full mb-8 ${isLeft ? 'flex-row-reverse' : ''}`}>
            {/* Center Line Marker */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center h-full">
                <div className="w-8 h-8 rounded-full bg-[#DC833D] border-4 border-white dark:border-zinc-900 z-10 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                {!isLast && <div className="w-0.5 h-full bg-gray-200 dark:bg-zinc-800 -mb-8"></div>}
            </div>

            {/* Empty Space for Desktop Layout */}
            <div className="hidden md:block w-5/12"></div>

            {/* Content Card */}
            <div className={`w-[calc(100%-4rem)] md:w-5/12 ml-12 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 group">
                    <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-[#DC833D]" />
                        <span className="text-sm font-bold text-[#DC833D] tracking-wider">{year}</span>
                    </div>
                    <h3 className="text-xl font-serif text-black dark:text-white mb-3 group-hover:text-[#DC833D] transition-colors">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{description}</p>

                    {image && (
                        <div className="mt-4 relative h-48 w-full rounded-lg overflow-hidden">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
