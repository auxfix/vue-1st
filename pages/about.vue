<template>
  <div class="about-page">
    <header class="page-header">
      <div class="container">
        <h1 class="animate__animated animate__fadeIn">
          About Us
        </h1>
        <p class="animate__animated animate__fadeIn animate__delay-1s">
          Learn about our journey and commitment to excellence
        </p>
      </div>
    </header>

    <main class="container">
      <section class="about-section">
        <div class="about-content">
          <h2>Our Story</h2>
          <p>{{ aboutContent.story }}</p>

          <h2>Our Mission</h2>
          <p>{{ aboutContent.mission }}</p>

          <h2>Our Values</h2>
          <ul class="values-list">
            <li v-for="value in aboutContent.values" :key="value.id">
              <strong>{{ value.title }}:</strong> {{ value.description }}
            </li>
          </ul>
        </div>
      </section>

      <section class="team-section">
        <h2 class="section-title">
          Our Team
        </h2>
        <div class="team-grid">
          <div v-for="member in team" :key="member.id" class="team-card">
            <div class="team-member-image">
              {{ member.avatar }}
            </div>
            <h3>{{ member.name }}</h3>
            <p class="team-member-position">
              {{ member.position }}
            </p>
            <p class="team-member-bio">
              {{ member.bio }}
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const aboutContent = ref({
  story: 'Founded in 2020, Sick World Residence has been at the forefront of luxury living. Our journey began with a vision to create living spaces that transcend the ordinary, combining innovative design with unparalleled comfort.',
  mission: 'Our mission is to redefine modern living by creating exceptional residential spaces that inspire and elevate the quality of life for our residents.',
  values: [
    { id: 1, title: 'Excellence', description: 'We strive for excellence in every detail of our developments.' },
    { id: 2, title: 'Innovation', description: 'We embrace innovative solutions and modern technologies.' },
    { id: 3, title: 'Sustainability', description: 'We are committed to environmental responsibility and sustainable practices.' },
    { id: 4, title: 'Community', description: 'We build more than just homes; we create thriving communities.' }
  ]
})

const team = ref([
  {
    id: 1,
    avatar: '👨‍💼',
    name: 'John Smith',
    position: 'CEO & Founder',
    bio: 'With over 20 years of experience in luxury real estate development.'
  },
  {
    id: 2,
    avatar: '👩‍💼',
    name: 'Sarah Johnson',
    position: 'Head of Design',
    bio: 'Award-winning architect with a passion for sustainable design.'
  },
  {
    id: 3,
    avatar: '👨‍💼',
    name: 'Michael Chen',
    position: 'Operations Director',
    bio: 'Expert in creating efficient and seamless living experiences.'
  }
])
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 6rem 0 4rem;
  text-align: center;
  margin-bottom: 4rem;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.about-section {
  margin-bottom: 4rem;
}

.about-content h2 {
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
}

.values-list {
  list-style: none;
  padding: 0;
}

.values-list li {
  margin-bottom: 1rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.team-card:hover {
  transform: translateY(-5px);
}

.team-member-image {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.team-member-position {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.team-member-bio {
  font-size: 0.9rem;
  color: #666;
}
</style>
