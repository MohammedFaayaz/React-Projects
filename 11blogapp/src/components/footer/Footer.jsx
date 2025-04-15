import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-12 border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-start">
          
          {/* Logo & Copyright */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <Link to="/" className="flex items-center space-x-3">
              <Logo width="130px" />
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-200">DevUI</span>. All Rights Reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-2/3 flex flex-wrap justify-between">
            
            {/* Company Section */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-300 uppercase tracking-wide">
                Company
              </h3>
              <ul className="space-y-3">
                <li><Link className="hover:text-blue-400 transition duration-300" to="/">Features</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-300" to="/">Pricing</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-300" to="/">Affiliate</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-300" to="/">Press Kit</Link></li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-300 uppercase tracking-wide">
                Support
              </h3>
              <ul className="space-y-3">
                <li><Link className="hover:text-green-400 transition duration-300" to="/">Account</Link></li>
                <li><Link className="hover:text-green-400 transition duration-300" to="/">Help</Link></li>
                <li><Link className="hover:text-green-400 transition duration-300" to="/">Contact Us</Link></li>
                <li><Link className="hover:text-green-400 transition duration-300" to="/">Customer Support</Link></li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-300 uppercase tracking-wide">
                Legals
              </h3>
              <ul className="space-y-3">
                <li><Link className="hover:text-red-400 transition duration-300" to="/">Terms & Conditions</Link></li>
                <li><Link className="hover:text-red-400 transition duration-300" to="/">Privacy Policy</Link></li>
                <li><Link className="hover:text-red-400 transition duration-300" to="/">Licensing</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>Made with ❤️ by Fayaz Team</p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <Link to="/" className="hover:text-gray-100 transition duration-300">Twitter</Link>
            <Link to="/" className="hover:text-gray-100 transition duration-300">LinkedIn</Link>
            <Link to="/" className="hover:text-gray-100 transition duration-300">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
