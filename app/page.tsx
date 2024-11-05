import { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Mission } from '@/components/sections/mission'
import { Products } from '@/components/sections/products'
import { Testimonials } from '@/components/sections/testimonials'
import { Team } from '@/components/sections/team'
import { CTA } from '@/components/sections/cta'
import { Footer } from '@/components/layout/footer'         
//import css
import '@/app/globals.css'
export const metadata: Metadata = {
  title: 'RubizCode - Shaping the Future of Technology',
  description: 'RubizCode is a dynamic team of developers, designers, and visionaries committed to crafting web and app solutions that elevate businesses.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Products />
      <Testimonials />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}