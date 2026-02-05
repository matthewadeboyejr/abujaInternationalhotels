export default function SpotlightsSection() {
  const spotlights = [
    {
      title: 'Hidden Gems: Unearthing Unique Off-the-Beaten-Path Stays.',
      image: 'Console Table',
    },
    {
      title: 'Luxury Villas: Your Passport to Exclusive Retreat Experiences.',
      image: 'Living Room',
    },
    {
      title: 'Cozy Cabins and Winter Retreats: Where Comfort Meets Nature.',
      image: 'Minimalist Room',
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-black dark:text-foreground text-center mb-12">
          spotlights
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {spotlights.map((spotlight, index) => (
            <div key={index} className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-sm relative">
              <div className="w-full h-[300px] bg-gray-200 dark:bg-zinc-800 relative">
                <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-300 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
                  <span className="text-gray-500">{spotlight.image}</span>
                </div>
                {/* Icon in top right */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white dark:bg-black rounded-full flex items-center justify-center">
                  <span className="text-xs dark:text-white">●</span>
                </div>
                {/* Purple dot at bottom left */}
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black dark:text-white">{spotlight.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 dark:bg-zinc-700 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 dark:bg-zinc-700 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
