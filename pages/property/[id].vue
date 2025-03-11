<template>
  <div class="property-page">
    <header class="page-header">
      <div class="container">
        <h1 class="animate__animated animate__fadeIn">{{ property?.name || 'Property Details' }}</h1>
      </div>
    </header>

    <main class="container" v-if="property">
      <div class="property-content">
        <div class="property-image">
          {{ property.image }}
        </div>

        <div class="property-details">
          <div class="location">
            <i class="fas fa-map-marker-alt"></i>
            {{ property.location }}
          </div>

          <div class="features">
            <div class="feature">
              <i class="fas fa-bed"></i>
              <span>{{ property.bedrooms }} Bedrooms</span>
            </div>
            <div class="feature">
              <i class="fas fa-bath"></i>
              <span>{{ property.bathrooms }} Bathrooms</span>
            </div>
            <div class="feature">
              <i class="fas fa-ruler-combined"></i>
              <span>{{ property.area }} sqft</span>
            </div>
          </div>

          <div class="description">
            <h2>Description</h2>
            <p>{{ property.description }}</p>
          </div>

          <div class="category">
            <h2>Category</h2>
            <p>{{ property.category }}</p>
          </div>

          <NuxtLink to="/portfolio" class="btn">
            Back to Portfolio
          </NuxtLink>
        </div>
      </div>
    </main>

    <div v-else class="container">
      <p>Property not found.</p>
      <NuxtLink to="/portfolio" class="btn">
        Back to Portfolio
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
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

const property = computed(() => {
  return properties.value.find(p => p.id === parseInt(route.params.id))
})
</script>

<style scoped>
.property-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 2rem 0;
}

.property-image {
  height: 400px;
  background: var(--primary-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
}

.property-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.location {
  font-size: 1.2rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.feature {
  background: var(--background-color);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.description,
.category {
  h2 {
    margin-bottom: 0.5rem;
    color: var(--primary-color);
  }
}

@media (max-width: 768px) {
  .property-content {
    grid-template-columns: 1fr;
  }

  .property-image {
    height: 300px;
  }
}
</style> 