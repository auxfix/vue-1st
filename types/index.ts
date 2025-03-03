export interface Feature {
  id: number
  icon: string
  title: string
  description: string
  isHovered: boolean
}

export interface Hero {
  title: string
  subtitle: string
}

export interface FooterLink {
  id: number
  text: string
  href: string
}

export interface ContactInfo {
  address: string
  email: string
  phone: string
}

export interface FooterContent {
  about: string
  links: FooterLink[]
  contactInfo: ContactInfo
}

export interface SiteContent {
  hero: Hero
  brandName: string
  footerContent: FooterContent
}

export interface FeaturesResponse {
  features: Feature[]
} 