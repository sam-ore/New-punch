import logo from "../../assets/images/logo-white.png"

const Footer = () => {
 
  return (
    <footer className="bg-black text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">



        <div>
        {/* Logo / Brand */}
        <div>
          <img src={logo} alt="" />
        </div>

        {/* Links */}
        <div>
          
          <ul className="space-y-2 text-white text-[14px] grid grid-cols-6 gap-0.5">
            <li>News</li>
            <li>Politics</li>
            <li>Business</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Sports</li>
            <li>Entertainment</li>
          </ul>
        </div>

        </div>

        {/* Company */}
        {/* <div>
          <h2 className="font-semibold mb-3">Company</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Advertise</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div> */}

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold mb-3">Newsletter</h2>
          <p className="text-sm text-gray-400 mb-3">
            Get daily news updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded bg-gray-800 text-white outline-none"
          />
          <button className="mt-2 w-full bg-red-600 hover:bg-red-700 p-2 rounded">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} The Punch. All rights reserved.
      </div>
    </footer>
  );
}


export default Footer
