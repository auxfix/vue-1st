<template>
  <div class="property-details">
    <header class="page-header">
      <div class="container">
        <h1 class="animate__animated animate__fadeIn">{{ property?.name || 'Loading...' }}</h1>
        <p class="animate__animated animate__fadeIn animate__delay-1s">
          {{ property?.location || 'Loading location...' }}
        </p>
      </div>
    </header>

    <main class="container">
      <div v-if="pending" class="loading-state">
        Loading property details...
      </div>
      <div v-else-if="error" class="error-state">
        {{ error.message }}
      </div>
      <div v-else-if="property" class="property-content">
        <div class="property-header">
          <div class="property-image">{{ property.image }}</div>
          <div class="property-info">
            <div class="property-stats">
              <span>{{ property.bedrooms }} Beds</span>
              <span>{{ property.bathrooms }} Baths</span>
              <span>{{ property.area }} sqft</span>
            </div>
            <p class="property-price">{{ property.price }}</p>
            <p class="property-status">{{ property.status }}</p>
          </div>
        </div>

        <div class="property-description">
          <h2>Description</h2>
          <p>{{ property.description }}</p>
        </div>

        <div class="property-features">
          <h2>Features</h2>
          <ul>
            <li v-for="feature in property.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="property-amenities">
          <h2>Amenities</h2>
          <ul>
            <li v-for="amenity in property.amenities" :key="amenity">
              {{ amenity }}
            </li>
          </ul>
        </div>

        <div class="property-actions">
          <button class="btn">Schedule Viewing</button>
          <button class="btn btn-secondary">Download Brochure</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { PortfolioItem } from '~/types'

const route = useRoute()
const { data: property, pending, error } = await useFetch<PortfolioItem>(`/api/portfolio/${route.params.id}`)

// Add meta tags for SEO
useHead({
  title: computed(() => `${property.value?.name || 'Property'} - Sick World Residence`),
  meta: [
    {
      name: 'description',
      content: computed(() => property.value?.description || '')
    }
  ]
})
</script>

<style scoped>
.property-details {
  padding-top: 80px;
}

.property-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.property-image {
  font-size: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-color);
  border-radius: 12px;
  padding: 2rem;
}

.property-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.property-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.property-stats span {
  background: var(--background-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.property-price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.property-status {
  color: var(--accent-color);
  font-weight: 500;
}

.property-description,
.property-features,
.property-amenities {
  margin: 3rem 0;
}

.property-description h2,
.property-features h2,
.property-amenities h2 {
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
}

.property-features ul,
.property-amenities ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.property-features li,
.property-amenities li {
  padding-left: 1.5rem;
  position: relative;
}

.property-features li::before,
.property-amenities li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.property-actions {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 2rem;
  color: var(--secondary-color);
  font-size: 1.2rem;
}

.error-state {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .property-header {
    grid-template-columns: 1fr;
  }
}
</style> 