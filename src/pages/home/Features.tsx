import alagbada from '../../assets/images/alagbada.jpg';
import death from '../../assets/images/death.jpg';
import oyo from '../../assets/images/oyo.webp';
import kano from '../../assets/images/kano.jpg';
import cult from '../../assets/images/cult.jpeg';
import begger from '../../assets/images/beggar.webp';
import hasim from '../../assets/images/hasim.webp';
import suicide from '../../assets/images/suicide.jpg';
import screen from "../../assets/images/Screenshot 2026-06-04 110046.png";

const metroNews = [
  { id: 1, image: alagbada, title: 'Ogun school hit by fresh gas leak, scores hospitalised', desc: 'Scores of students and staff at an Ijebu-Ode school were hospitalised after a fresh Ogun gas leak, the third in two months. Learn about the ongoing in...' },
  { id: 2, image: death, title: 'Final-year female varsity student found dead on Kogi highway' },
  { id: 3, image: suicide, title: 'Bauchi teenager in police custody over teen’s drowning' },
  { id: 4, image: cult, title: '17 nabbed for cultism in Abia' },
  { id: 5, image: begger, title: '144 arrested in Lagos street-begging raids' },
  { id: 6, image: kano, title: 'Soldiers foil kidnap attempts, rescue 10 victims in Plateau, Kaduna' },
  { id: 7, image: hasim, title: 'NDLEA intercepts over 320,000 tramadol capsules in Taraba' },
  { id: 8, image: death, title: 'One killed, 13 injured in Lagos-Abeokuta Expressway crash' },
  { id: 9, image: suicide, title: 'Troops repel bandit attacks in Sokoto, rescue abducted farmers' },
];

const Features = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-17 max-w-7xl mx-auto font-bold">
      {/* Advertisement Banner */}
      <div className="mt-4 sm:mt-5">
        <img src={screen} alt="Advertisement" className="w-full h-auto max-h-[80px] sm:max-h-[120px] object-contain" />
      </div>

      {/* Main Metro Plus Section - Stack on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-3.5 mt-5">
        {/* Left Metro Plus Content */}
        <div className="flex-1">
          {/* Heading */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0" aria-hidden="true"></div>
            <h1 className="text-base sm:text-lg md:text-xl">METRO PLUS</h1>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>

          {/* Main News + Side Columns */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
            {/* Featured News (Left) */}
            <div className="lg:w-1/3">
              <img src={alagbada} alt="Ogun school gas leak" className="w-full h-auto rounded-lg" />
              <h2 className="text-base sm:text-lg mt-2">Ogun school hit by fresh gas leak, scores hospitalised</h2>
              <p className="text-sm sm:text-[15px] font-normal">
                Scores of students and staff at an Ijebu-Ode school were hospitalised after a fresh Ogun gas leak, the third in two months. Learn about the ongoing in...
              </p>
            </div>

            {/* Right Columns - Two columns of news items with dividers */}
            <div className="flex-1 flex flex-col sm:flex-row gap-4 lg:gap-0">
              {/* Left Column of news items */}
              <div className="flex-1 space-y-3 sm:space-y-4">
                {metroNews.slice(1, 5).map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start">
                    <img src={item.image} alt={item.title} className="w-full sm:w-28 md:w-32 lg:w-36 h-auto rounded" />
                    <h2 className="text-sm sm:text-base font-bold">{item.title}</h2>
                  </div>
                ))}
              </div>

              {/* Vertical Divider - hidden on mobile, visible on desktop */}
              <div className="hidden lg:block w-px bg-gray-400"></div>

              {/* Right Column of news items */}
              <div className="flex-1 space-y-3 sm:space-y-4">
                {metroNews.slice(5, 9).map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start">
                    <img src={item.image} alt={item.title} className="w-full sm:w-28 md:w-32 lg:w-36 h-auto rounded" />
                    <h2 className="text-sm sm:text-base font-bold">{item.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* More Button */}
          <div className="text-center mt-5">
            <button className="bg-[#FFEDED] text-red-400 px-8 sm:px-12 md:px-25 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base">
              <a href="#">More</a>
            </button>
          </div>
        </div>

        {/* Right Sidebar - 3D Carousel */}
        <div className="lg:w-[280px] xl:w-[320px] flex-shrink-0 mt-6 lg:mt-0">
          <div className="bg-[#f0f0f0] rounded-[8px] p-4 sm:p-6 text-center">
            {/* Carousel container - scaled for mobile */}
            <div className="w-[140px] sm:w-[160px] h-[210px] sm:h-[250px] mx-auto mb-4 [perspective:900px]">
              <div className="relative w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] origin-center animate-[a_14s_linear_infinite]">
                {[oyo, oyo, oyo, oyo].map((img, idx) => (
                  <div
                    key={idx}
                    className="absolute w-full h-full"
                    style={{ transform: `rotateY(${idx * 90}deg) translateZ(80px)` }}
                  >
                    <img src={img} alt="Punch e-edition" className="w-full h-full object-cover rounded" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-red-500 text-lg sm:text-xl">Read PUNCH Anywhere</h1>
              <p className="text-sm sm:text-base font-normal px-2">
                Unlock the full print replica on any device - every page, every day. Subscribe now for instant e-edition access.
              </p>
              <button className="bg-red-500 text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-3xl mt-3 text-sm sm:text-base hover:bg-red-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;