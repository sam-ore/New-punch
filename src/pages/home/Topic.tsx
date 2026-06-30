import death from "../../assets/images/alagbada.jpg";
import im1 from "../../assets/images/tinubu.webp"
import im2 from "../../assets/images/senate.jpeg"
import im3 from "../../assets/images/adeleke.jpeg"
import im4 from "../../assets/images/no4.webp"
import im5 from "../../assets/images/kano.jpg"
import im6 from "../../assets/images/n07.webp"
import im7 from "../../assets/images/no5.webp"
import im8 from "../../assets/images/no2.webp"



const Topic = () => {
  return (
    <div className="px-3 sm:px-4 md:px-6 max-w-7xl mx-auto font-sans font-semibold mt-6 sm:mt-8 md:mt-10">
      
      {/* FIRST ROW - Special Features, Interview, Spice, Panorama */}
      <div className="space-y-6 sm:space-y-8 md:grid md:grid-cols-4 gap-4">
        
        {/* Special Features */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0"></div>
            <h1 className="text-base sm:text-lg font-bold">Special Features</h1>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>
          
          <img src={im6} alt="Special Features" className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg mb-3" />
          
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base">VIO powers: What Appeal Court ruling means for motorists</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">Imprisoned mandate: Inside 'controversial' conviction of Enugu Assembly winner</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">Fighting for dignity: Daily struggles of physically challenged entrepreneurs</h2>
          </div>
          
          <div className='text-center mt-4'>
            <button className='bg-[#FFEDED] text-red-400 px-12 sm:px-20 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base'>
              <a href="">More</a>
            </button>
          </div>
        </div>

        {/* Interview */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0"></div>
            <h1 className="text-base sm:text-lg font-bold">Interview</h1>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>
          
          <img src={im1} alt="Interview" className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg mb-3" />
          
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base font-serif">Kwara NSCDC commandant shielding officers who assaulted me — Lawyer</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">Workers shouldn't suffer govt inefficiency — NLC spokesman, Upah</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">I left exam hall crying after being denied accommodation for my disability — Visually impaired nurse</h2>
          </div>
          
          <div className='text-center mt-4'>
            <button className='bg-[#FFEDED] text-red-400 px-12 sm:px-20 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base'>
              <a href="">More</a>
            </button>
          </div>
        </div>

        {/* Spice */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0"></div>
            <h1 className="text-base sm:text-lg font-bold">Spice</h1>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>
          
          <img src={im2} alt="Spice" className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg mb-3" />
          
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base">Iconic women beside Nigeria's business titans</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">Mohbad's wife should be reinvestigated over his death — Yomi Fabiyi</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">Drama as Mark Angel ties knot with new wife</h2>
          </div>
          
          <div className='text-center mt-4'>
            <button className='bg-[#FFEDED] text-red-400 px-12 sm:px-20 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base'>
              <a href="">More</a>
            </button>
          </div>
        </div>

        {/* Panorama */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0"></div>
            <h1 className="text-base sm:text-lg font-bold">Panorama</h1>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>
          
          <img src={im7} alt="Panorama" className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg mb-3" />
          
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base">Rural industrialisation key to ending poverty — Oyelaran-Oyeyinka</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">Women, youths deserve greater opportunities in governance — Gombe gov aspirant Yahaya-Kaltho</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">On high alert: Ekiti fortifies borders against rising wave of kidnappings</h2>
          </div>
          
          <div className='text-center mt-4'>
            <button className='bg-[#FFEDED] text-red-400 px-12 sm:px-20 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base'>
              <a href="">More</a>
            </button>
          </div>
        </div>

        {/* SECOND ROW - Technology, Family, Health, Education */}
        
        {/* Technology */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0"></div>
            <h1 className="text-base sm:text-lg font-bold">Technology</h1>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>
          
          <img src={im8} alt="Technology" className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg mb-3" />
          
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base">NiRA convenes stakeholders to strengthen internet sovereignty</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">Schneider pushes industrial skills devt across West Africa</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">Schneider pushes industrial skills devt across West Africa</h2>
          </div>
          
          <div className='text-center mt-4'>
            <button className='bg-[#FFEDED] text-red-400 px-12 sm:px-20 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base'>
              <a href="">More</a>
            </button>
          </div>
        </div>

        {/* Family */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0"></div>
            <h1 className="text-base sm:text-lg font-bold">Family</h1>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>
          
          <img src={im3} alt="Family" className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg mb-3" />
          
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base">How to protect yourself from sexual predators</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">Food crises: Six tips on how to own a thriving home garden</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">6 ways to handle a child with substance abuse</h2>
          </div>
          
          <div className='text-center mt-4'>
            <button className='bg-[#FFEDED] text-red-400 px-12 sm:px-20 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base'>
              <a href="">More</a>
            </button>
          </div>
        </div>

        {/* Health */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0"></div>
            <h1 className="text-base sm:text-lg font-bold">Health</h1>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>
          
          <img src={im4} alt="Health" className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg mb-3" />
          
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base">Cholera: Children worst hit as 5,260 cases, 67 deaths recorded</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">NCDC urges governors to boost Ebola prevention funding</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">Ebola: Oyo assures residents of safety, places healthcare workers on alert</h2>
          </div>
          
          <div className='text-center mt-4'>
            <button className='bg-[#FFEDED] text-red-400 px-12 sm:px-20 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base'>
              <a href="">More</a>
            </button>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 sm:w-5 sm:h-6 bg-red-600 flex-shrink-0"></div>
            <h1 className="text-base sm:text-lg font-bold">Education</h1>
            <div className="h-px flex-1 bg-[#00000061]"></div>
          </div>
          
          <img src={im5} alt="Education" className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg mb-3" />
          
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base">UNN dismisses attack rumour, bans motorcycles on campus</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">2026 WASSCE: Oyo raises concern over late-night exams</h2>
            <div className="border-b border-gray-300 pb-3"></div>
            
            <h2 className="text-sm sm:text-base">OAU has fulfilled founding fathers' vision, says TETFund boss</h2>
          </div>
          
          <div className='text-center mt-4'>
            <button className='bg-[#FFEDED] text-red-400 px-12 sm:px-20 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base'>
              <a href="">More</a>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Topic;