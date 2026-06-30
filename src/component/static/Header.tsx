import img1 from "../../assets/images/FREE_Tiktok_App_Icon_Illustration-removebg-preview.png";
import img4 from "../../assets/images/Facebook_Logo_PNG-removebg-preview.png";
import img5 from "../../assets/images/627689266831789741-removebg-preview.png";
import img6 from "../../assets/images/Instagrams_Original_Logo_Creator_Likes_The_New_Logo-removebg-preview.png";
import img2 from "../../assets/images/YouTube_Logo_PNG-removebg-preview.png";
import img3 from "../../assets/images/Telegram_Logo_PNG-removebg-preview.png";
import logo from "../../assets/images/Punch_logo.svg.png";
import tinubu from "../../assets/images/tinubu.webp";
import service from "../../assets/images/Screenshot 2026-06-19 at 13-04-31 Punch newspapers - Breaking News Nigerian News & Top Stories.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Features", path: "/features" },
    { name: "Metro Plus", path: "/metro" },
    { name: "Business", path: "/business" },
    { name: "Sport", path: "/sport" },
    { name: "PUNCH Lite", path: "/punch" },
    { name: "Editorial", path: "/editorial" },
    { name: "Columns", path: "/column" },
    { name: "Videos", path: "/Video" },
    { name: "Continuation From Print", path: "/continuation" },
  ];

  return (
    <div>
      {/* DESKTOP TOP BAR - Unchanged */}
      <div className="hidden lg:block bg-black text-white">
        <div className="flex gap-1.5 h-12 px-13 items-center">
          <h2>Advertise with us</h2>
          <h2>| Tuesday, June 02, 2026</h2>
        </div>
      </div>

      {/* TOP HEADER - Mobile changes only */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-15 py-2 lg:py-3 lg:h-16">
        
        {/* Left: Search Button - Mobile Only */}
        <div className="lg:hidden flex items-center">
          <button className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-5 sm:w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Desktop Social Icons - Unchanged */}
        <div className="hidden lg:flex px-4">
          <div><img src={img1} alt="" width={80} className="w-12 lg:w-16" /></div>
          <div><img src={img2} alt="" width={60} className="w-10 lg:w-14" /></div>
          <div><img src={img6} alt="" width={50} className="w-9 lg:w-12" /></div>
          <div><img src={img4} alt="" width={70} className="w-11 lg:w-16" /></div>
          <div><img src={img5} alt="" width={45} className="w-8 lg:w-11" /></div>
          <div><img src={img3} alt="" width={45} className="w-8 lg:w-11" /></div>
        </div>

        {/* Center: Logo - Mobile with color strip */}
        <div className="flex flex-col items-center">
        
          
          <img 
            src={logo} 
            alt="Punch Logo" 
            className="w-24 sm:w-32 md:w-36 lg:w-[150px] h-auto" 
          />
          
          <p className="text-[8px] sm:text-[10px] lg:text-xs text-gray-600 font-medium tracking-wide hidden sm:block">
            Most Widely Read Newspaper
          </p>
        </div>

        {/* Right: Dropdown + Menu - Mobile Only */}
        <div className="lg:hidden flex flex-col items-end gap-1">
          {/* Dropdown */}
          <div className="relative">
           
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              
            </div>
          </div>

          {/* Red Hamburger Menu */}
          <button 
            onClick={toggleMenu} 
            className="bg-red-600 rounded-md p-1.5 sm:p-2"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1">
              <span className="block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Desktop Subscribe Button - Unchanged */}
        <div className="hidden lg:flex justify-end gap-1.5">
          <div><img src={service} alt="" width={40} className="w-8 lg:w-10" /></div>
          <div className="bg-[#ff0100] text-white px-2.5 py-2 rounded-3xl">
            <button className="flex gap-1 items-center text-xs lg:text-sm">
              <img src={tinubu} alt="" width={12} /> Subscribe: Punch E-Paper
            </button>
          </div>
        </div>
      </div>

      {/* Thin Black Horizontal Line */}
      <hr className="w-full border-t border-black" />

      {/* SECOND SECTION - Horizontal Slider Nav - Mobile Only */}
      <div className="lg:hidden relative overflow-x-auto scrollbar-hide px-3 sm:px-4 py-2">
        <div className="flex items-center gap-0 min-w-max">
          
          {/* Subscribe Button - First Item */}
          <div className="flex-shrink-0 mr-3">
            <button >
              <div className="bg-[#ff0100] text-white px-2.5 py-2 rounded-3xl">
            <button className="flex gap-1 items-center text-xs lg:text-sm">
              <img src={tinubu} alt="" width={12} /> Subscribe: Punch E-Paper
            </button>
          </div>
              
        <div className="hidden lg:flex justify-end gap-1.5">
          <div><img src={service} alt="" width={40} className="w-8 lg:w-10" /></div>
          
        </div>
            </button>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-6 bg-gray-300 flex-shrink-0 mr-3"></div>

          {/* Navigation Items */}
          <div className="flex items-center gap-0">
            {navItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    text-xs sm:text-sm font-bold whitespace-nowrap px-3 sm:px-4 py-1
                    ${isActive ? 'text-red-600' : 'text-[#666666]'}
                  `}
                >
                  {item.name}
                </NavLink>
                {index < navItems.length - 1 && (
                  <div className="w-px h-5 bg-gray-300 flex-shrink-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP NAVIGATION - Unchanged */}
      <div className="hidden lg:block px-13 items-center">
        <ul className="flex gap-4 font-bold p-2 text-[#666666] text-sm xl:text-base">
          <li><a href="/">Home</a></li>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/metro">Metro Plus</NavLink>
          <NavLink to="/business">Business</NavLink>
          <NavLink to="/sport">Sport</NavLink>
          <NavLink to="/punch">PUNCH Lite</NavLink>
          <NavLink to="/editorial">Editorial</NavLink>
          <NavLink to="/column">Columns</NavLink>
          <NavLink to="/Video">Videos</NavLink>
          <NavLink to="/continuation">Continuation From Print</NavLink>
        </ul>
      </div>

      <hr className="hidden lg:block" />

      {/* Mobile Slide Menu */}
      <div className={`lg:hidden fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <img src={logo} alt="Punch Logo" width={120} />
          <button onClick={toggleMenu} className="text-gray-700 text-2xl">✕</button>
        </div>

        {/* Subscribe Button in Menu */}
        <div className="p-4 border-b">
          <button className="bg-red-600 text-white w-full py-3 rounded-full flex items-center justify-center gap-2 text-sm font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Subscribe: Punch E-Paper
          </button>
        </div>

        {/* Menu Navigation Links */}
        <ul className="flex flex-col p-4 space-y-2 font-bold text-[#666666] overflow-y-auto max-h-[60vh]">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                block py-2.5 px-3 rounded-lg
                ${isActive ? 'text-red-600 bg-red-50' : ''}
              `}
              onClick={toggleMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Social Icons in Menu */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <div className="flex justify-center gap-3">
            <img src={img1} alt="TikTok" width={35} className="w-8 sm:w-9" />
            <img src={img2} alt="YouTube" width={35} className="w-8 sm:w-9" />
            <img src={img6} alt="Instagram" width={32} className="w-7 sm:w-8" />
            <img src={img4} alt="Facebook" width={35} className="w-8 sm:w-9" />
            <img src={img5} alt="Social" width={30} className="w-7 sm:w-8" />
            <img src={img3} alt="Telegram" width={30} className="w-7 sm:w-8" />
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Header;