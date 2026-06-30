import advert from "../../assets/images/sceenshot.png";
import adver from "../../assets/images/Screenshot_2-6-2026_115322_www.youtube.com_.webp";
import n01 from "../../assets/images/no2.webp";
import no4 from "../../assets/images/n07.webp";
import no2 from "../../assets/images/no5.webp";
import no3 from "../../assets/images/no4.webp";
import no1 from "../../assets/images/no3.webp";

const videoData = [
  {
    id: 1,
    image: adver,
    title:
      "So This Happened (EP 401) reviews: U.S. commits ₦5bn to document religious freedom abuses",
  },
  {
    id: 2,
    image: n01,
    title:
      "So This Happened (EP 401) reviews: Families still await return of abducted Oyo pupils",
  },
  {
    id: 3,
    image: no1,
    title:
      "So This Happened (EP 401) reviews: Minimum wage debate reignites amid rising costs",
  },
  {
    id: 4,
    image: no3,
    title:
      "Punch Health Xplainer: Ebola cases are rising again: should Nigerians be worried?",
  },
  {
    id: 5,
    image: no2,
    title:
      "Stop bearing foreign names, be proud of Yorùbá identity — Yemi Elebuibon",
  },
  {
    id: 6,
    image: no4,
    title: "Latest news update from around the world",
  },
];

const Process = () => {
  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-17 max-w-7xl mx-auto">
      {/* Advertisement Banner */}
      <div className="w-full">
        <img 
          src={advert} 
          alt="Advertisement" 
          className="w-full h-auto max-h-[80px] sm:max-h-[120px] md:max-h-[150px] object-contain"
        />
      </div>

      {/* Video Section */}
      <div className="bg-gray-200 mt-4 sm:mt-6 md:mt-9 p-3 sm:p-5 md:p-7 rounded-lg">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0" aria-hidden="true"></div>
          <span className="font-serif text-base sm:text-lg md:text-xl font-bold">Top Video</span>
          <div className="h-px flex-1 bg-[#00000061]"></div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 pt-2 sm:pt-3 md:pt-5 scroll-smooth">
          {videoData.map((video) => (
            <div 
              key={video.id} 
              className="min-w-[200px] sm:min-w-[230px] md:min-w-[280px] flex-shrink-0 relative rounded-lg overflow-hidden group"
            >
              <div className="relative">
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] object-cover rounded-lg"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl">▶</span>
                  </div>
                </div>
              </div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                <h3 className="text-white text-xs sm:text-sm md:text-base font-bold line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-4 sm:mt-5 md:mt-6">
          <button className="bg-red-500 hover:bg-red-600 transition-colors text-white px-6 sm:px-8 md:px-9 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium">
            <a href="#" className="block">View More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;