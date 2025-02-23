const { createApp, ref, onMounted } = Vue

createApp({
  setup() {
    const isScrolled = ref(false)
    const brandName = ref('Sick World Residence')
    const subtitle = ref('Comprehensive Solutions for Modern Living')
    
    const navLinks = ref([
      { id: 1, text: 'Home', href: 'index.html' },
      { id: 2, text: 'About', href: 'about.html' },
      { id: 3, text: 'Services', href: 'services.html' },
      { id: 4, text: 'Portfolio', href: 'portfolio.html' }
    ])

    const services = ref([
      {
        id: 1,
        icon: '🏢',
        title: 'Property Management',
        description: 'Comprehensive property management services for residential complexes.',
        features: [
          'Regular maintenance and repairs',
          'Security management',
          'Tenant relations',
          'Facility optimization'
        ]
      },
      {
        id: 2,
        icon: '🏗️',
        title: 'Development & Construction',
        description: 'Expert development and construction services for new properties.',
        features: [
          'Custom design and architecture',
          'Sustainable building practices',
          'Project management',
          'Quality assurance'
        ]
      },
      {
        id: 3,
        icon: '🤝',
        title: 'Real Estate Consulting',
        description: 'Professional consulting services for property investment.',
        features: [
          'Market analysis',
          'Investment strategy',
          'Property valuation',
          'Risk assessment'
        ]
      }
    ])

    const process = ref([
      {
        id: 1,
        title: 'Initial Consultation',
        description: 'We begin with a detailed discussion of your needs and objectives.'
      },
      {
        id: 2,
        title: 'Planning & Design',
        description: 'Our team develops a comprehensive plan tailored to your requirements.'
      },
      {
        id: 3,
        title: 'Implementation',
        description: 'We execute the plan with precision and attention to detail.'
      },
      {
        id: 4,
        title: 'Quality Assurance',
        description: 'Rigorous quality checks ensure everything meets our high standards.'
      }
    ])

    const ctaText = ref('Let us help you create the perfect living space.')

    const footerAbout = ref('We are dedicated to providing exceptional living spaces that combine luxury, comfort, and convenience.')
    
    const footerLinks = ref([
      { id: 1, text: 'Home', href: 'index.html' },
      { id: 2, text: 'About', href: 'about.html' },
      { id: 3, text: 'Portfolio', href: 'portfolio.html' }
    ])

    const contactInfo = ref({
      address: '123 Luxury Avenue, Cityville, ST 12345',
      email: 'info@sickworldresidence.com',
      phone: '+1 (555) 123-4567'
    })

    const year = ref(new Date().getFullYear())

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    const contactUs = () => {
      window.location.href = 'index.html#contact'
    }

    return {
      isScrolled,
      brandName,
      subtitle,
      navLinks,
      services,
      process,
      ctaText,
      footerAbout,
      footerLinks,
      contactInfo,
      year,
      contactUs
    }
  }
}).mount('#app')