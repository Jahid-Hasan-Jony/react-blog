import React, { useContext } from "react";
import { Link } from "react-router";
import { DarkModeContext } from "../Context/Context";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`navbar ${
        darkMode ? "dark" : "bg-base-100"
      } shadow shadow-black-100`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="w-36" src="mts.png" alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-first font-bold text-lg ">
          <Link className="px-3 hover:text-second" to="/">
            Home
          </Link>
          <Link className="px-5 hover:text-red" to="/about">
            About
          </Link>
          <Link className="px-3 hover:text-second" to="/products">
            Products
          </Link>
          <Link className="px-3 hover:text-second" to="/blog">
            Blog
          </Link>
          <Link className="px-3 hover:text-second" to="/contact">
            Contact
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <label
          onClick={() => setDarkMode((pre) => !pre)}
          className="flex cursor-pointer gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
