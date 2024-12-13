import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import UseAuth from './authHooks/UseAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-init';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {user} = UseAuth();
// 
const handleSignOut =()=>{
  // 
  signOut(auth);
  alert("signOut")
}
// 
return(
    <nav className="bg-transparent text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold flex items-center">
            <span className="text-green-500 mr-2">
              {/* Example Icon */}
              <FiMenu />
            </span>
            Finate
          </span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute md:static md:flex top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:top-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:items-center">
            <li>
              <NavLink
                to="/"
                className="block px-4 py-2 md:p-0 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className="block px-4 py-2 md:p-0 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/employers"
                className="block px-4 py-2 md:p-0 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Employers Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/candidates"
                className="block px-4 py-2 md:p-0 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Candidates
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="block px-4 py-2 md:p-0 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block px-4 py-2 md:p-0 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Registration Button */}
          <div className="md:ml-6 text-center">
           {user? <NavLink
              to="/"
              className="block px-4 py-2 mt-2 md:mt-0 md:inline-block bg-green-500 rounded-md hover:bg-green-600 transition"
              onClick={handleSignOut}
            >
              SignOut
            </NavLink>: <NavLink
              to="/register"
              className="block px-4 py-2 mt-2 md:mt-0 md:inline-block bg-green-500 rounded-md hover:bg-green-600 transition"
            >
              + Registration
            </NavLink>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;