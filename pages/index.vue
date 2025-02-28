<template>
  <div>
    <header class="hero">
      <h1 class="animate__animated animate__fadeIn">{{ title }}</h1>
      <p class="hero-subtitle animate__animated animate__fadeIn animate__delay-1s">{{ subtitle }}</p>
      <NuxtLink
        to="#features"
        class="btn animate__animated animate__fadeIn animate__delay-2s"
        @click.prevent="scrollToSection('#features')"
      >
        Explore More
      </NuxtLink>
    </header>

    <main class="main-content">
      <section id="features" class="features-section container">
        <h2 class="section-title">Our Features</h2>
        <div class="features-grid">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="feature-card"
            @mouseenter="feature.isHovered = true"
            @mouseleave="feature.isHovered = false"
            :class="{ 'feature-card-hovered': feature.isHovered }"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section container">
        <h2 class="section-title">Get in Touch</h2>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <input
              type="text"
              v-model="contactForm.name"
              placeholder="Your Name"
              required
            >
          </div>
          <div class="form-group">
            <input
              type="email"
              v-model="contactForm.email"
              placeholder="Your Email"
              required
            >
          </div>
          <div class="form-group">
            <textarea
              v-model="contactForm.message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </section>
    </main>
  </div>
</template>

<script setup>
const title = ref('Welcome to Your Dream Living Space')
const subtitle = ref('Experience luxury and comfort like never before')

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

const isSubmitting = ref(false)

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const submitForm = async () => {
  isSubmitting.value = true
  try {
    // Here you would typically make an API call to submit the form
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulated API call
    alert('Thank you for your message! We will get back to you soon.')
    contactForm.value = { name: '', email: '', message: '' }
  } catch (error) {
    alert('There was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.contact-section {
  margin: 4rem auto;
  padding: 4rem 0;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}
</style> 