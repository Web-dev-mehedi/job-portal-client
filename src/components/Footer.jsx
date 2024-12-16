import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="text-white text-lg font-bold mb-4">Find Jobs</h2>
            <p className="text-sm">
              That necessitates ecommerce platform that optimizes your store popularised the release.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">About Us</a></li>
              <li><a href="#" className="hover:text-green-500">Why Extobot</a></li>
              <li><a href="#" className="hover:text-green-500">Contact With Us</a></li>
              <li><a href="#" className="hover:text-green-500">Our Partners</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">Quick Links</a></li>
              <li><a href="#" className="hover:text-green-500">Job Packages</a></li>
              <li><a href="#" className="hover:text-green-500">Post New Job</a></li>
              <li><a href="#" className="hover:text-green-500">Jobs Listing</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">Affiliate</a></li>
              <li><a href="#" className="hover:text-green-500">Blog</a></li>
              <li><a href="#" className="hover:text-green-500">Help & Support</a></li>
              <li><a href="#" className="hover:text-green-500">Careers</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="w-full md:w-1/5">
            <h3 className="text-white font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">Start a Trial</a></li>
              <li><a href="#" className="hover:text-green-500">How It Works</a></li>
              <li><a href="#" className="hover:text-green-500">Features</a></li>
              <li><a href="#" className="hover:text-green-500">Price & Planning</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            © 2025 Find Jobs. Made <span className="text-green-500">❤</span> by <a href="#" className="hover:text-green-500">Mehedi Hasan</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
