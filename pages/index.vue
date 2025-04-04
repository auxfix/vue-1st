<template>
  <div>
    <header class="hero">
      <h1 class="animate__animated animate__fadeIn">{{ siteContent.hero.title }}</h1>
      <p class="hero-subtitle animate__animated animate__fadeIn animate__delay-1s">{{ siteContent.hero.subtitle }}</p>
      <div class="hero-buttons">
        <NuxtLink
          to="#features"
          class="btn primary-btn animate__animated animate__fadeIn animate__delay-2s"
          @click.prevent="scrollToSection('#features')"
        >
          Explore More
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="btn secondary-btn animate__animated animate__fadeIn animate__delay-2s"
        >
          Contact Us
        </NuxtLink>
      </div>
    </header>

    <main class="main-content">
      <section id="features" class="features-section container">
        <div class="section-header">
          <h2 class="section-title">Our Features</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">Discover what makes us unique</p>
        </div>
        <div v-if="isLoading" class="loading-state">
          <div class="loading-spinner"></div>
          <p>Loading features...</p>
        </div>
        <div v-else class="features-grid">
          <div
            v-for="feature in features.features"
            :key="feature.id"
            class="feature-card"
            :class="{ 'feature-card-hovered': feature.isHovered }"
            @mouseenter="feature.isHovered = true"
            @mouseleave="feature.isHovered = false"
          >
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <div class="feature-more">Learn More →</div>
          </div>
        </div>
      </section>

      <section class="testimonials-section container">
        <div class="section-header">
          <h2 class="section-title">What Our Clients Say</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">Testimonials from our satisfied customers</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">The team exceeded our expectations with their attention to detail and commitment to quality.</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">👨‍💼</div>
              <div class="testimonial-info">
                <h4>John Smith</h4>
                <p>CEO, Smith Enterprises</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">Exceptional service and outstanding results. They transformed our vision into reality.</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">👩‍💼</div>
              <div class="testimonial-info">
                <h4>Sarah Johnson</h4>
                <p>Director, Design Co.</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">Professional, innovative, and truly dedicated to customer satisfaction.</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">👨‍💼</div>
              <div class="testimonial-info">
                <h4>Michael Chen</h4>
                <p>Founder, Tech Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section container">
        <div class="section-header">
          <h2 class="section-title">Get in Touch</h2>
          <div class="section-divider"></div>
        </div>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input
              id="name"
              type="text"
              v-model="contactForm.name"
              placeholder="Enter your name"
              required
            >
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input
              id="email"
              type="email"
              v-model="contactForm.email"
              placeholder="Enter your email"
              required
            >
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea
              id="message"
              v-model="contactForm.message"
              placeholder="What would you like to tell us?"
              required
            />
          </div>
          <button type="submit" class="btn primary-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const { siteContent, features, isLoading } = useSiteContent()

const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const scrollToSection = (href: string) => {
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

// Add meta tags for SEO
useHead({
  title: siteContent.value.hero.title,
  meta: [
    {
      name: 'description',
      content: siteContent.value.hero.subtitle
    }
  ]
})
</script>

<style scoped>
.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.primary-btn {
  background: var(--primary-color);
  color: white;
  border: none;
}

.secondary-btn {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-divider {
  height: 4px;
  width: 60px;
  background: var(--primary-color);
  margin: 1rem auto;
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card-hovered {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  animation: float 3s ease-in-out infinite;
}

.feature-more {
  margin-top: 1rem;
  color: var(--primary-color);
  font-weight: 600;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.feature-card:hover .feature-more {
  opacity: 1;
}

.testimonials-section {
  margin: 6rem auto;
  padding: 4rem 0;
  background: var(--background-color);
  border-radius: 12px;
}

.testimonial-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  position: relative;
  transition: transform 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-quote {
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 4rem;
  color: var(--primary-color);
  opacity: 0.2;
  font-family: serif;
}

.testimonial-text {
  font-size: 1.2rem;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 2rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.testimonial-info h4 {
  margin: 0;
  color: var(--primary-color);
}

.testimonial-info p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.7;
}

.contact-section {
  margin: 4rem auto;
  padding: 4rem 0;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  color: #333;
}

input, textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.loading-state {
  text-align: center;
  padding: 2rem;
  color: var(--secondary-color);
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0,0,0,0.1);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.section-subtitle {
  color: #666;
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.btn:hover::after {
  width: 300px;
  height: 300px;
}

.primary-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.secondary-btn {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.hero {
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(var(--primary-color-rgb), 0.1), rgba(var(--secondary-color-rgb), 0.1));
  z-index: -1;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
</style>
