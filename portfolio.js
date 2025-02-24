const { createApp, ref, onMounted } = Vue

createApp({
  setup() {
    const isScrolled = ref(false)
    const brandName = ref('Sick World Residence')
    const currentCategory = ref('All')

    const navLinks = ref([
      { id: 1, text: 'Home', href: 'index.html' },
      { id: 2, text: 'About', href: 'about.html' },
      { id: 3, text: 'Services', href: 'services.html' },
      { id: 4, text: 'Portfolio', href: 'portfolio.html' }
    ])

    const categories = ref(['All', 'Residential', 'Commercial', 'Luxury'])

    const portfolioItems = ref([
      {
        id: 1,
        title: 'Luxury Apartment Complex',
        description: 'Modern living spaces with premium amenities',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400',
        isHovered: false
      },
      {
        id: 2,
        title: 'Corporate Office Tower',
        description: 'State-of-the-art business facilities',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1577587230708-187fdbef4d91?auto=format&fit=crop&w=400',
        isHovered: false
      },
      {
        id: 3,
        title: 'Beachfront Villa',
        description: 'Exclusive oceanfront property',
        category: 'Luxury',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400',
        isHovered: false
      },
      {
        id: 4,
        title: 'Smart Home Community',
        description: 'Technology-integrated living spaces',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400',
        isHovered: false
      },
      {
        id: 5,
        title: 'Shopping Complex',
        description: 'Modern retail and entertainment center',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400',
        isHovered: false
      },
      {
        id: 6,
        title: 'Private Island Resort',
        description: 'Ultimate luxury escape',
        category: 'Luxury',
        image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=400',
        isHovered: false
      }
    ])

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

    const filteredPortfolioItems = ref([])

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      filterPortfolio('All')
    })

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    const scrollToSection = (href) => {
      if (href.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.href = href
      }
    }

    const filterPortfolio = (category) => {
      currentCategory.value = category
      filteredPortfolioItems.value = category === 'All'
        ? portfolioItems.value
        : portfolioItems.value.filter(item => item.category === category)
    }

    const showDetails = (item) => {
      alert(`Viewing details for ${item.title}\n\n${item.description}`)
    }

    return {
      isScrolled,
      brandName,
      navLinks,
      categories,
      currentCategory,
      filteredPortfolioItems,
      footerAbout,
      footerLinks,
      contactInfo,
      year,
      scrollToSection,
      filterPortfolio,
      showDetails
    }
  }
}).mount('#app')