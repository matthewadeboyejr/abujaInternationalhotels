import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="min-h-[80vh] bg-gray-100 rounded-3xl mx-4 md:mx-20 my-4">
      <div className="mx-auto p-6 md:p-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 flex-1 w-full text-center lg:text-left">
            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 rounded-full bg-white w-fit px-4 py-4 mx-auto lg:mx-0">
              <div className="flex items-center">
                <span className="text-black text-2xl">★</span>
              </div>
              <span className="text-lg text-black">4.5 Rating</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight capitalize">
              Come have a feel of luxury
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              The best hotel for your next vacation, staycation, honeymoon, business trip or just relaxation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="px-6 py-4 bg-gray-200 text-lg rounded-full font-medium text-black hover:bg-gray-50 transition-colors w-full sm:w-auto">
                Contact Us
              </button>
              <button className="px-6 py-4 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto">
                Check Availability
              </button>
            </div>

            {/* Trusted By */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by</p>
              <div className="flex items-center justify-center lg:justify-start space-x-6 opacity-60">
                {/* Placeholder logos */}
                <div className="w-20 h-8 bg-gray-300 rounded"></div>
                <div className="w-20 h-8 bg-gray-300 rounded"></div>
                <div className="w-20 h-8 bg-gray-300 rounded"></div>
                <div className="w-20 h-8 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-full">
            {/* Hero Image */}
            <Image
              src="/hero-image.jpeg"
              alt="Luxury Hotel Room Interior"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
