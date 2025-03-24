import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";

const Navbar = ({
  toggleTheme,
  isDarkMode,
}: {
  toggleTheme: () => void;
  isDarkMode: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" w-full shadow-md shadow-[#b1aa9c] ml-0 lg:ml-6 mr-0 lg:mr-6 rounded-sm">
      <nav className="mt-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <h1 className="font-bold text-2xl text-black dark:text-white">
              Gorubari
            </h1>
          </Link>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-[24px] focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenuFold
              size={40}
              className="text-black dark:text-white"
            />
          </button>

          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex md:flex-row md:space-x-8">
              <ul className="font-medium flex md:flex-row md:space-x-8  flex-col p-4 md:p-0 mt-4 rounded-lg  rtl:space-x-reverse md:mt-0 md:border-0 text-black dark:text-white">
                <li>
                  <Link
                    href="/about-us"
                    className="block py-2 px-3  dark:text-white text-[20px]"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="block py-2 px-3  dark:text-white text-[20px]"
                  >
                    menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="block py-2 px-3  dark:text-white text-[20px]"
                  >
                    gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/review"
                    className="block py-2 px-3  dark:text-white text-[20px]"
                  >
                    review
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-2  dark:text-white px-3 text-[20px]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg ml-4"
              >
                {isDarkMode ? (
                  <MdLightMode size={24} />
                ) : (
                  <MdDarkMode size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Dark/Light Mode Button */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
