'use client'

import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-2">
            <Image 
              src="/images/logos/logo-main.svg" 
              alt="RubizCode Logo" 
              width={20} 
              height={20}
            />
            <span className="text-gray-300 text-md ">RubizCode</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 