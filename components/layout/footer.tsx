'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Github } from 'lucide-react'

const footerCategories = ['Products', 'Company', 'Support', 'Legal'] as const
const footerLinks = ['Link 1', 'Link 2', 'Link 3', 'Link 4'] as const

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container py-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">RubizCode</h2>
            <div className="space-y-4">
              <SocialLinks />
              <ContactInfo />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <FooterCategories />
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link href="https://facebook.com" className="hover:text-primary">
        <Facebook className="h-6 w-6" />
      </Link>
      <Link href="https://linkedin.com" className="hover:text-primary">
        <Linkedin className="h-6 w-6" />
      </Link>
      <Link href="https://github.com" className="hover:text-primary">
        <Github className="h-6 w-6" />
      </Link>
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="space-y-2 text-sm text-muted-foreground">
      <p>© 2024 RubizCode. All Rights reserved.</p>
      <address className="not-italic">
        <p>RubizCode</p>
        <p>+880 1616 001001</p>
        <p>33/Kha Eudora Lakewood, 12/A Dhanmondi, Dhaka-1212</p>
      </address>
    </div>
  )
}

function FooterCategories() {
  return (
    <>
      {footerCategories.map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-sm font-medium">{category}</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
} 