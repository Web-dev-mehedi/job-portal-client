import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import UseAuth from "./Hooks/UseAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-init";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setLoader, userFromDb } = UseAuth();

  //
  const handleSignOut = () => {
    //
    signOut(auth);
    alert("signOut");
    setLoader(false);
  };
  //
  return (
    <nav className="bg-transparent text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-3xl font-extrabold flex items-center font-mono">
            <span className="text-green-500 mr-2 ">
              {/* Example Icon */}
              <FiMenu />
            </span>
            Find Jobs
          </span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
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
                All Jobs
              </NavLink>
            </li>
            {userFromDb?.find(i=> i.userRole === "Candidate" && i.userEmail === user?.email)&&
              <> 
                <li>
                  <NavLink
                    to="/application/me"
                    className="block px-4 py-2 md:p-0 hover:text-green-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Applications
                  </NavLink>
                </li>
              </>
            }
            {userFromDb?.find(i=> i.userRole === "Employer" && i.userEmail === user?.email) && (
              <>
                <li>
                  <NavLink
                    to="/add-jobs"
                    className="block px-4 py-2 md:p-0 hover:text-green-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    Add Job
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-jobs"
                    className="block px-4 py-2 md:p-0 hover:text-green-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Job Posts
                  </NavLink>
                </li>
              </>
            )}

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
            {user ? (
              <Link
                to="/login"
                className="block px-4 py-2 mt-2 md:mt-0 md:inline-block bg-green-500 rounded-md hover:bg-green-600 transition"
                onClick={handleSignOut}
              >
                SignOut
              </Link>
            ) : (
              <Link
                to="/register"
                className="block px-4 py-2 mt-2 md:mt-0 md:inline-block bg-green-500 rounded-md hover:bg-green-600 transition"
              >
                + Registration
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
