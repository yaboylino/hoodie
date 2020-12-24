import React, { useState } from "react"
import Link from "next/link"

const Nav = () => {
  const [menuBtn, setMenuBtn] = useState(true)
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl py-6 mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex  justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <Link href="/">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden w-16" src="./logo.png" alt="Workflow" />
                <img className="hidden lg:block w-16" src="./logo.png" alt="Workflow" />
              </div>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/">
                <a className="border-transparent text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-bold">HOME</a>
              </Link>
              <Link href="/product">
                <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-bold">HOODIE</a>
              </Link>
              <Link href="/contact">
                <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-bold">CONTACT</a>
              </Link>
            </div>
            <div>
              <div className="ml-8 hidden md:inline-flex h-full items-center">
                <Link href="/product">
                  <a className="text-sm font-bold px-4 py-3 no-underline text-white bg-black hover:bg-gray-300 hover:text-black rounded rounded">Buy Now</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
