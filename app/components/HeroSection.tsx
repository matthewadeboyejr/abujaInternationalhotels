import Image from "next/image";
import Link from 'next/link';


export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-img.jpg"
          alt="Abuja International Hotels Luxury"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-4 md:px-20 pb-20 md:pb-32">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-thin tracking-tight text-white font-serif">
            Abuja International Hotels
          </h1>

          <div className="w-24 h-1 bg-white/80 mx-auto rounded-full" />

          <p className="text-base md:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Unparalleled luxury and comfort in the heart of the Federal Capital Territory.
          </p>

          <div className="pt-8">
            <Link href="/about">
              <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white text-base rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Discover Our Story
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </div>

  );
}
