const { createApp, ref, onMounted } = Vue

createApp({
  setup() {
    const isScrolled = ref(false)
    const isSubmitting = ref(false)
    const brandName = ref('Sick World Residence')
    const title = ref('Welcome to Your Dream Living Space')
    const subtitle = ref('Experience luxury and comfort like never before')
    
    const navLinks = ref([
      { id: 1, text: 'Home', href: 'index.html' },
      { id: 2, text: 'About', href: 'about.html' },
      { id: 3, text: 'Services', href: 'services.html' },
      { id: 4, text: 'Portfolio', href: 'portfolio.html' }
    ])

    const features = ref([
      { 
        id: 1, 
        icon: '🏠',
        title: 'Premium Location', 
        description: 'Prime spots in the heart of the city',
        isHovered: false
      },
      { 
        id: 2, 
        icon: '🛋️',
        title: 'Luxury Amenities', 
        description: 'State-of-the-art facilities for your comfort',
        isHovered: false
      },
      { 
        id: 3, 
        icon: '🔒',
        title: '24/7 Security', 
        description: 'Round-the-clock protection for your peace of mind',
        isHovered: false
      }
    ])

    const contactForm = ref({
      name: '',
      email: '',
      message: ''
    })

    const footerAbout = ref('We are dedicated to providing exceptional living spaces that combine luxury, comfort, and convenience.')
    
    const footerLinks = ref([
      { id: 1, text: 'About Us', href: '#' },
      { id: 2, text: 'Services', href: '#' },
      { id: 3, text: 'Privacy Policy', href: '#' }
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

    const scrollToSection = (href) => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const submitForm = async () => {
      isSubmitting.value = true
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('Thank you for your message! We will get back to you soon.')
      contactForm.value = { name: '', email: '', message: '' }
      isSubmitting.value = false
    }

    return {
      isScrolled,
      isSubmitting,
      brandName,
      title,
      subtitle,
      navLinks,
      features,
      contactForm,
      footerAbout,
      footerLinks,
      contactInfo,
      year,
      scrollToSection,
      submitForm
    }
  }
}).mount('#app')