<template>
  <div class="portfolio-page">
    <header class="page-header">
      <div class="container">
        <h1 class="animate__animated animate__fadeIn">Our Portfolio</h1>
        <p class="animate__animated animate__fadeIn animate__delay-1s">
          Explore our collection of premium properties
        </p>
      </div>
    </header>

    <main class="container">
      <div class="portfolio-filters">
        <button
          v-for="category in categories"
          :key="category"
          class="filter-btn"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="portfolio-grid">
        <div
          v-for="property in filteredProperties"
          :key="property.id"
          class="portfolio-item"
        >
          <div class="portfolio-image">{{ property.image }}</div>
          <div class="portfolio-content">
            <h3>{{ property.name }}</h3>
            <p class="location">{{ property.location }}</p>
            <div class="property-features">
              <span>{{ property.bedrooms }} Beds</span>
              <span>{{ property.bathrooms }} Baths</span>
              <span>{{ property.area }} sqft</span>
            </div>
            <p class="description">{{ property.description }}</p>
            <NuxtLink :to="'/property/' + property.id" class="btn">
              View Details
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const categories = ['All', 'Apartments', 'Penthouses', 'Villas']
const selectedCategory = ref('All')

const properties = ref([
  {
    id: 1,
    name: 'Luxury Penthouse',
    location: 'Downtown District',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    category: 'Penthouses',
    image: '🏢',
    description: 'Stunning penthouse with panoramic city views and premium finishes.'
  },
  {
    id: 2,
    name: 'Garden Villa',
    location: 'Suburban Paradise',
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    category: 'Villas',
    image: '🏡',
    description: 'Spacious villa with private garden and modern amenities.'
  },
  {
    id: 3,
    name: 'Sky Apartment',
    location: 'City Center',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    category: 'Apartments',
    image: '🏬',
    description: 'Modern apartment with high-end finishes and city views.'
  },
  {
    id: 4,
    name: 'Waterfront Villa',
    location: 'Coastal Area',
    bedrooms: 6,
    bathrooms: 5,
    area: 4000,
    category: 'Villas',
    image: '🏖️',
    description: 'Exclusive waterfront villa with private beach access.'
  }
])

const filteredProperties = computed(() => {
  if (selectedCategory.value === 'All') {
    return properties.value
  }
  return properties.value.filter(property => property.category === selectedCategory.value)
})
</script>

<style scoped>
.portfolio-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0 4rem;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid var(--primary-color);
  border-radius: 25px;
  background: transparent;
  color: var(--primary-color);
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--primary-color);
  color: white;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.portfolio-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-image {
  height: 200px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
}

.portfolio-content {
  padding: 2rem;
}

.location {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.property-features {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.property-features span {
  background: var(--background-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.description {
  margin-bottom: 1.5rem;
  color: #666;
}
</style> 