import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <div className="container mx-auto">
      <nav className="bg-white rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img className="h-10 w-auto" src="/images/ic_elementify.png" alt="Your Company" />
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <a href="#" className="font-bold text-black-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Tabel Periodic</a>
                <a href="#" className="font-bold text-black-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Leaderboard</a>
                <a href="#" className="font-bold text-black-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Materi</a>
                <a href="#" className="font-bold text-black-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
              </div>
            </div>
            <div className="sm:hidden">
              <button type="button" className="block text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 p-2" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block bg-gray-900 text-white rounded-md py-2 px-3 text-base font-medium">Dashboard</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 px-3 text-base font-medium">Team</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 px-3 text-base font-medium">Projects</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 px-3 text-base font-medium">Calendar</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md py-2 px-3 text-base font-medium">Login</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
