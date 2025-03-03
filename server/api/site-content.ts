export default defineEventHandler(() => {
  return {
    hero: {
      title: 'Welcome to Your Dream Living Space',
      subtitle: 'Experience luxury and comfort like never before'
    },
    brandName: 'Sick World Residence',
    footerContent: {
      about: 'We are dedicated to providing exceptional living spaces that combine luxury, comfort, and convenience.',
      links: [
        { id: 1, text: 'About Us', href: '/about' },
        { id: 2, text: 'Services', href: '/services' },
        { id: 3, text: 'Privacy Policy', href: '/privacy' }
      ],
      contactInfo: {
        address: '123 Luxury Avenue, Cityville, ST 12345',
        email: 'info@sickworldresidence.com',
        phone: '+1 (555) 123-4567'
      }
    }
  }
}) 