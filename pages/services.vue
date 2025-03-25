<template>
  <div class="services-page">
    <header class="page-header">
      <div class="container">
        <h1 class="animate__animated animate__fadeIn">
          Our Services
        </h1>
        <p class="animate__animated animate__fadeIn animate__delay-1s">
          Discover our range of premium residential services
        </p>
      </div>
    </header>

    <main class="container">
      <section class="services-grid">
        <div v-for="service in services" :key="service.id" class="service-card">
          <div class="service-icon">
            {{ service.icon }}
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
      </section>

      <section class="cta-section">
        <h2>Ready to Experience Luxury Living?</h2>
        <p>Contact us today to learn more about our services</p>
        <NuxtLink to="/contact" class="btn">
          Get in Touch
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup>
const services = ref([
  {
    id: 1,
    icon: '🏢',
    title: 'Property Management',
    description: 'Comprehensive property management services for a worry-free living experience.',
    features: [
      '24/7 maintenance support',
      'Regular property inspections',
      'Utility management',
      'Security services'
    ]
  },
  {
    id: 2,
    icon: '🏠',
    title: 'Luxury Residences',
    description: 'Exclusive access to premium residential properties in prime locations.',
    features: [
      'Premium locations',
      'Modern amenities',
      'Customizable interiors',
      'Concierge services'
    ]
  },
  {
    id: 3,
    icon: '🌟',
    title: 'Concierge Services',
    description: 'Premium concierge services for our distinguished residents.',
    features: [
      'Personal assistance',
      'Event planning',
      'Travel arrangements',
      'Lifestyle management'
    ]
  },
  {
    id: 4,
    icon: '🏊',
    title: 'Lifestyle Amenities',
    description: 'World-class amenities for an elevated living experience.',
    features: [
      'Fitness center',
      'Swimming pool',
      'Spa facilities',
      'Entertainment areas'
    ]
  }
])
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.service-features {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.service-features li {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.cta-section {
  text-align: center;
  padding: 4rem 0;
  background: var(--background-color);
  border-radius: 12px;
  margin: 4rem 0;
}

.cta-section h2 {
  margin-bottom: 1rem;
}

.cta-section p {
  margin-bottom: 2rem;
}
</style>
