import img from "../../assets/images/The-Reps-Green-Chamber.webp";
import advert from "../../assets/images/ginger.png";

const newsItems = [
  {
    id: 1,
    title: "Benfica in talks to appoint Fulham's Silva as head coach",
    time: "2 minutes ago",
  },
  {
    id: 2,
    title: "Work resumes as NUPRC workers suspend strike",
    time: "2 minutes ago",
  },
  {
    id: 3,
    title: "Army Rescue Two Kidnap Victims, Kill Four Bandits In Benue, Taraba",
    time: "2 minutes ago",
  },
  {
    id: 4,
    title: "Liverpool legend Dalglish announces cancer diagnosis",
    time: "2 minutes ago",
  },
  {
    id: 5,
    title: "Cholera: Borno records 274 new cases in 24 hours as toll hits 4,204",
    time: "2 minutes ago",
  },
];

const topNewsItems = [
  {
    id: 6,
    title: "INEC data leak: Actor Emeka Ike threatens action against Wike's aide",
    category: "News",
  },
  {
    id: 7,
    title: "RCCG clarifies Adeboye's political stance, denies endorsing any party",
    category: "News",
  },
  {
    id: 8,
    title: "2027 polls: CBN targets N2.83tn cash in private hands",
    category: "Business & Economy",
  },
  {
    id: 9,
    title: "FG scraps three-month terminal leave for civil servants",
    category: "News",
  },
  {
    id: 10,
    title: "School abductions: Protest in Oyo, Ogun as NUT begins nationwide rally today",
    category: "Protest",
  },
];

const HomeHero = () => {
  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-9 max-w-7xl mx-auto">
      {/* Advertisement Banner */}
      <div className="text-center py-3 sm:py-4">
        <img 
          src={advert} 
          alt="Advertisement" 
          className="w-full max-h-[80px] sm:max-h-[120px] md:max-h-[150px] object-contain mx-auto"
        />
      </div>

      {/* Mobile: Stack vertically, Desktop: 3 columns */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 text-black mt-2 md:mt-4">
        
        {/* LEFT COLUMN - Latest News */}
        <div className="w-full lg:w-1/3">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0" aria-hidden="true"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold">LATEST NEWS</h2>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {newsItems.map((item) => (
              <article 
                key={item.id} 
                className="border-b border-gray-200 pb-3 sm:pb-4 last:border-0"
              >
                <p className="italic text-red-500 text-xs sm:text-sm">{item.time}</p>
                <h3 className="text-sm sm:text-base font-medium">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN - Featured Image (Centered on mobile) */}
        <div className="w-full lg:w-1/3 order-first lg:order-none">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="flex justify-center lg:block">
              <img
                src={img}
                alt="Terrorists den: 360 freed Borno captives recount starvation, deaths"
                className="w-full lg:w-full max-h-[250px] sm:max-h-[350px] md:max-h-[400px] object-cover"
              />
            </div>
            <div className="bg-[#E2E2E2] p-3 sm:p-4 min-h-[70px] sm:min-h-[80px]">
              <h2 className="text-base sm:text-lg md:text-2xl font-bold text-center lg:text-left">
                Terrorists den: 360 freed Borno captives recount starvation, deaths
              </h2>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Top News */}
        <div className="w-full lg:w-1/3">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0" aria-hidden="true"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold">Top News</h2>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {topNewsItems.map((item) => (
              <article 
                key={item.id} 
                className="border-b border-gray-200 pb-3 sm:pb-4 last:border-0"
              >
                <div className="flex gap-3">
                  <h3 className="font-bold font-serif flex-1 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <div className="flex-shrink-0 w-[80px] sm:w-[100px]">
                    <img
                      src={img}
                      alt={item.title}
                      className="w-full h-auto rounded-sm object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
                <p className="text-red-500 text-xs sm:text-sm mt-1 font-medium">
                  {item.category}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;