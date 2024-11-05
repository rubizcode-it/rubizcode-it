'use client'

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/sections/navbar"
import { useState } from 'react'
import { Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className={`
      w-full h-auto aspect-[16/9]
      text-white py-20 px-4 md:px-0
      bg-[url('/images/hero.jpg')] 
      bg-cover bg-center bg-no-repeat 
      relative
      before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/70 before:to-gray-900/70
      flex items-center justify-center
    `}>
      <Navbar />
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-8 relative z-10">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            SHAPING FUTURE
          </span>
        </h1>
        <Button 
          variant="outline" 
          size="lg" 
          className="text-white border-white hover:bg-white hover:text-black transition-colors relative z-10"
          onClick={() => setShowPopup(true)}
        >
          Get Started
        </Button>

        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white text-black p-8 rounded-lg max-w-md relative">
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p>
                    <a 
                      href="mailto:contact@rubizcode.com"
                      className="hover:underline"
                    >
                      Email: contact@rubizcode.com
                    </a>
                  </p>
                  <p>
                    <a 
                      href="tel:+8801616001001"
                      className="hover:underline"
                    >
                      Phone: +880 1616 001001
                    </a>
                  </p>
                </div>
                
                <div className="space-y-3 pt-2">
                  <Link 
                    href="https://facebook.com/RubizCode.Official" 
                    target="_blank"
                    className="flex items-center gap-2 text-[#1877F2] hover:text-[#0d6efd]"
                  >
                    <Facebook className="h-6 w-6" />
                    <span>facebook.com/RubizCode.Official</span>
                  </Link>
                  <Link 
                    href="https://www.linkedin.com/company/rubizcode" 
                    target="_blank"
                    className="flex items-center gap-2 text-[#0A66C2] hover:text-[#004182]"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span>linkedin.com/company/rubizcode</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 