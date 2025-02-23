const { createApp, ref, onMounted } = Vue

createApp({
  setup() {
    const isScrolled = ref(false)
    const brandName = ref('Sick World Residence')
    const subtitle = ref('Building Communities, Creating Homes')
    const story = ref('Founded in 2010, Sick World Residence has been at the forefront of luxury living. Our journey began with a vision to create not just buildings, but communities where people can thrive. Over the years, we have grown to become one of the most trusted names in residential development, known for our commitment to quality, innovation, and customer satisfaction.')
    
    const navLinks = ref([
      { id: 1, text: 'Home', href: 'index.html' },
      { id: 2, text: 'About', href: 'about.html' },
      { id: 3, text: 'Services', href: 'services.html' },
      { id: 4, text: 'Portfolio', href: 'portfolio.html' }
    ])

    const team = ref([
      {
        id: 1,
        name: 'John Smith',
        position: 'CEO & Founder',
        image: 'https://placehold.co/300x300',
        bio: 'With over 20 years of experience in real estate development.'
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        position: 'Head of Architecture',
        image: 'https://placehold.co/300x300',
        bio: 'Award-winning architect with a passion for sustainable design.'
      },
      {
        id: 3,
        name: 'Michael Chen',
        position: 'Customer Relations Director',
        image: 'https://placehold.co/300x300',
        bio: 'Dedicated to ensuring the highest level of resident satisfaction.'
      }
    ])

    const values = ref([
      {
        id: 1,
        icon: '🎯',
        title: 'Excellence',
        description: 'We strive for excellence in every aspect of our work.'
      },
      {
        id: 2,
        icon: '🤝',
        title: 'Integrity',
        description: 'We conduct our business with the highest ethical standards.'
      },
      {
        id: 3,
        icon: '💚',
        title: 'Sustainability',
        description: 'We are committed to environmentally responsible development.'
      }
    ])

    const footerAbout = ref('We are dedicated to providing exceptional living spaces that combine luxury, comfort, and convenience.')
    
    const footerLinks = ref([
      { id: 1, text: 'Home', href: 'index.html' },
      { id: 2, text: 'Services', href: 'services.html' },
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

    return {
      isScrolled,
      brandName,
      subtitle,
      story,
      navLinks,
      team,
      values,
      footerAbout,
      footerLinks,
      contactInfo,
      year
    }
  }
}).mount('#app')