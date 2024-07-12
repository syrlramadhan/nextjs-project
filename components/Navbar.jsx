"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaBell, FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!--  menu button nya --> */}
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link href="/index.html" className="flex flex-shrink-0 items-center">
              <img
                className="h-10 w-auto"
                src="images/logo-white.png"
                alt="MyProperty"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">MakassarProperty</span>
            </Link>

            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                <Link href="/" className={`text-white ${pathname === '/' ? 'bg-black' : ''} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                  Home
                </Link>
                <Link href="/properties" className={`text-white ${pathname === '/properties' ? 'bg-black' : ''} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                  Properties
                </Link>
                <Link href="/properties/add" className={`text-white ${pathname === '/properties/add' ? 'bg-black' : ''} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                  Add Property
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:ml-6">
            <div className="flex items-center">
              <Link href="/login" className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                <FaGoogle />
                <span className="px-1">Login or Register</span>
              </Link>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <Link href="" className="relative group">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <FaBell fontSize={25} className='p-1' />
              </button>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                2
              </span>
            </Link>
            {/* <!-- Profile dropdown button --> */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    width={25}
                    height={25}
                    className="h-8 w-8 rounded-full"
                    src="/images/profile.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium">
            Home
          </Link>
          <Link href="/properties" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Properties
          </Link>
          <Link href="/properties/add" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Add Property
          </Link>
          <Link href="/login" className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4">
            <FaGoogle className="mr-2" />
            <span>Login or Register</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
