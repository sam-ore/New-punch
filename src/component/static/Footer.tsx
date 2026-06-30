import logo from "../../assets/images/Punch_logo.svg.png"



import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FiSearch, FiMail } from "react-icons/fi";

export default function Footer() {
  const columns = [
    [
      "News",
      "Sports",
      "Metro Plus",
      "Politics",
      "Featured",
      "Latest News",
      "Business",
      "Business & Economy",
      "Opinion",
    ],
    [
      "Entertainment",
      "Auto",
      "Famous",
      "Breaking News",
      "Columns",
      "Technology",
      "Education",
      "Lifestyle",
    ],
    [
      "Corona",
      "Anti-Corruption",
      "Biafra",
      "Court",
      "Review",
      "Crime",
      "Security",
      "Health",
    ],
    [
      "Campus",
      "Champion",
      "Celebrity",
      "City Round",
      "Interview",
      "Opinion",
      "Special",
      "Technology",
    ],
    [
      "Famous",
      "Parent",
      "Education",
      "Cartoon",
      "Columns",
      "Diaspora",
      "Advertise",
      "Subscribe",
      "Disclaimer",
    ],
    [
      "Sports",
      "Metro Plus",
      "Business",
      "Economy",
      "Politics",
      "Entertainment",
      "Latest News",
      "Videos",
    ],
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">

        {/* Left Side */}
        <div className="lg:col-span-3">

          <h1 className="text-6xl font-black mb-10">
            <img src={logo} alt="" width={70}/>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

            {columns.map((column, index) => (
              <ul key={index} className="space-y-4">
                {column.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-red-500 transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}

          </div>

        </div>

        {/* Right Side */}

        <div>

          {/* Search */}

          <div className="bg-[#3f3f3f] rounded-full flex items-center px-5 py-3 mb-8">

            <input
              type="text"
              placeholder="Search"
              className="bg-transparent flex-1 outline-none"
            />

            <FiSearch size={24} />
          </div>

          {/* Subscribe */}

          <button className="w-full bg-white text-black rounded-full py-4 font-semibold flex justify-center items-center gap-3 mb-10">

            <FiMail />

            Subscribe

          </button>

          {/* Social */}

          <div className="flex gap-4 flex-wrap">

            <div className="bg-[#262626] p-4 rounded-lg">
              <FaFacebookF />
            </div>

            <div className="bg-[#262626] p-4 rounded-lg">
              <FaInstagram />
            </div>

            <div className="bg-[#262626] p-4 rounded-lg">
              <FaXTwitter />
            </div>

            <div className="bg-[#262626] p-4 rounded-lg">
              <FaLinkedinIn />
            </div>

            <div className="bg-[#262626] p-4 rounded-lg">
              <FaYoutube />
            </div>

            <div className="bg-[#262626] p-4 rounded-lg">
              <FaWhatsapp />
            </div>

            <div className="bg-[#262626] p-4 rounded-lg">
              <FaTelegramPlane />
            </div>

            <div className="bg-[#262626] p-4 rounded-lg">
              <FaTiktok />
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}