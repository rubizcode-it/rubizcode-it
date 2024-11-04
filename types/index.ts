import { ReactNode } from 'react'

export interface SocialLinks {
  linkedin?: string
  twitter?: string
  github?: string
  facebook?: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
  social: SocialLinks
}

export interface Product {
  name: string
  description: string
  color: string
  image: string
}

export interface Testimonial {
  name: string
  company: string
  logo: string
  quote: string
}

export interface ButtonProps {
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  children: ReactNode
  onClick?: () => void
}

export interface CardProps {
  className?: string
  children: ReactNode
}

export interface SectionProps {
  children: ReactNode
}

export interface FooterCategoryProps {
  category: string
  links: readonly string[]
}

export interface SocialLinkProps {
  href: string
  icon: ReactNode
  label: string
} 