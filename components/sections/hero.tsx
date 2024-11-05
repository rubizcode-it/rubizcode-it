'use client'

import { Button } from "@/components/ui/button"

export const  Hero = () => {
  return (
    <section className={`w-full bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4 md:px-0 `}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-8">
          SHAPING FUTURE
        </h1>
        <Button 
          variant="outline" 
          size="lg" 
          className="text-white border-white hover:bg-white hover:text-black transition-colors"
          onClick={() => console.log('Get Started clicked')}
        >
          Get Started
        </Button>
      </div>
    </section>
  )
} 