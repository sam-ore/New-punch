import img from "../../assets/images/SOWERE.png";
import advert from "../../assets/images/ginger.png";

const NewsHero = () => {
  return (
    <div className="px-4 lg:px-9 font-bold">
      {/* Advertisement Banner */}
      <h1 className="text-center text-2xl lg:text-4xl px-2 lg:px-5 py-3 lg:p-3.5">
        <img src={advert} alt="advert" className="w-full lg:w-auto" />
      </h1>

      {/* Grid: 1 column on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 p-2 lg:p-4 text-black">
        
        {/* Left Column – Category: News */}
        <div className="p-2 lg:p-4 order-1 lg:order-none">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 lg:w-6 lg:h-6 bg-red-600"></div>
            <h1 className="text-sm lg:text-base">Category: News</h1>
          </div>
          <p className="italic text-red-500 text-xs lg:text-sm">2 minutes ago</p>
          <h2 className="text-sm lg:text-base max-w-2xl">Natasha secures FG commitment for more CNG stations in Kogi</h2>

          <p className="italic text-red-500 text-xs lg:text-sm">2 minutes ago</p>
          <h2 className="text-sm lg:text-base">Work resumes as NUPRC workers suspend strike</h2>

          <p className="italic text-red-500 text-xs lg:text-sm">2 minutes ago</p>
          <h2 className="text-sm lg:text-base">Army Rescue Two Kidnap Victims, Kill Four Bandits In Benue, Taraba</h2>

          <p className="italic text-red-500 text-xs lg:text-sm">2 minutes ago</p>
          <h2 className="text-sm lg:text-base">Liverpool legend Dalglish announces cancer diagnosis</h2>

          <p className="italic text-red-500 text-xs lg:text-sm">2 minutes ago</p>
          <h2 className="text-sm lg:text-base">Cholera: Borno records 274 new cases in 24 hours as toll hits 4,204</h2>
        </div>

        {/* Center Column – Featured Image */}
        <div className="order-3 lg:order-none col-span-1 lg:col-span-1">
          <img src={img} alt="Sowore" className="w-full lg:w-[800px] h-auto" />
          <h1 className="bg-[#E2E2E2] p-2 text-sm lg:text-base">
            Demolish looters’ assets like kidnappers’ hideouts, Sowore seeks equal penalty
          </h1>
        </div>

        {/* Right Column – Top News */}
        <div className="p-2 lg:p-4 order-2 lg:order-none">
          <h1 className="text-sm lg:text-base">Top News</h1>
          <div className="flex gap-2">
            <h2 className="font-black pt-1.5 font-serif text-sm lg:text-base">
              INEC data leak: Actor Emeka Ike threatens action against Wike's aide
            </h2>
            <img src={img} alt="news" className="w-8 lg:w-[50px] h-auto flex-shrink-0" />
          </div>
          <p className="font-black pt-1.5 font-serif text-xs lg:text-sm">News</p>
          <hr />

          <div className="flex gap-2">
            <h2 className="font-black pt-1.5 font-serif text-sm lg:text-base">
              RCCG clarifies Adeboye's political stance, denies endorsing any party
            </h2>
            <img src={img} alt="news" className="w-8 lg:w-[50px] h-auto flex-shrink-0" />
          </div>
          <p className="font-black pt-1.5 font-serif text-xs lg:text-sm">News</p>
          <hr />

          <div className="flex gap-2">
            <h2 className="font-black pt-1.5 font-serif text-sm lg:text-base">
              2027 polls: CBN targets N2.83tn cash in private hands
            </h2>
            <img src={img} alt="news" className="w-8 lg:w-[50px] h-auto flex-shrink-0" />
          </div>
          <p className="font-black pt-1.5 font-serif text-xs lg:text-sm">Business & Economy</p>
          <hr />

          <div className="flex gap-2">
            <h2 className="font-black pt-1.5 font-serif text-sm lg:text-base">
              FG scraps three-month terminal leave for civil servants
            </h2>
            <img src={img} alt="news" className="w-8 lg:w-[50px] h-auto flex-shrink-0" />
          </div>
          <p className="font-black pt-1.5 font-serif text-xs lg:text-sm text-red-500">News</p>
          <hr />

          <div className="flex gap-2">
            <h2 className="font-black pt-1.5 font-serif text-sm lg:text-base">
              School abductions: Protest in Oyo, Ogun as NUT begins nationwide rally today
            </h2>
            <img src={img} alt="news" className="w-8 lg:w-[50px] h-auto flex-shrink-0" />
          </div>
          <p className="font-black pt-1.5 font-serif text-xs lg:text-sm">protest</p>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;