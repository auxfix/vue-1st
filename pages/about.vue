<template>
  <div class="about-page">
    <header class="page-header">
      <div class="container">
        <h1 class="animate__animated animate__fadeIn">About Us</h1>
        <p class="animate__animated animate__fadeIn animate__delay-1s">
          Learn about our journey and commitment to excellence
        </p>
      </div>
    </header>

    <main class="container">
      <section class="about-section">
        <div class="about-grid">
          <div class="about-image">
            <div class="image-placeholder">🏢</div>
            <div class="experience-badge">5+ Years Experience</div>
          </div>
          <div class="about-content">
            <div class="section-header">
              <h2>Our Story</h2>
              <div class="section-divider"></div>
            </div>
            <p>{{ aboutContent.story }}</p>
            
            <div class="section-header">
              <h2>Our Mission</h2>
              <div class="section-divider"></div>
            </div>
            <p>{{ aboutContent.mission }}</p>
            
            <div class="section-header">
              <h2>Our Values</h2>
              <div class="section-divider"></div>
            </div>
            <div class="values-grid">
              <div v-for="value in aboutContent.values" :key="value.id" class="value-card">
                <div class="value-icon">✓</div>
                <div class="value-content">
                  <h3>{{ value.title }}</h3>
                  <p>{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="timeline-section">
        <div class="section-header text-center">
          <h2 class="section-title">Our Journey</h2>
          <div class="section-divider center-divider"></div>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2020</div>
              <h3>Company Founded</h3>
              <p>Sick World Residence was established with a vision to transform luxury living.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2021</div>
              <h3>First Project Completed</h3>
              <p>Successfully delivered our first residential complex with 100% occupancy.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2022</div>
              <h3>Expansion to New Markets</h3>
              <p>Extended our operations to three new cities with innovative concepts.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2023</div>
              <h3>Sustainability Initiative</h3>
              <p>Launched our green building program, incorporating eco-friendly practices.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">Present</div>
              <h3>Continuing Innovation</h3>
              <p>Currently developing next-generation smart homes with cutting-edge technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="team-section">
        <div class="section-header text-center">
          <h2 class="section-title">Our Team</h2>
          <div class="section-divider center-divider"></div>
        </div>
        <div class="team-grid">
          <div v-for="member in team" :key="member.id" class="team-card">
            <div class="team-member-image">{{ member.avatar }}</div>
            <h3>{{ member.name }}</h3>
            <p class="team-member-position">{{ member.position }}</p>
            <p class="team-member-bio">{{ member.bio }}</p>
            <div class="team-social">
              <a href="#" class="social-icon">🌐</a>
              <a href="#" class="social-icon">📱</a>
              <a href="#" class="social-icon">📧</a>
            </div>
          </div>
        </div>
      </section>

      <section class="stats-section">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-title">Projects Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">200+</div>
            <div class="stat-title">Happy Clients</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">15+</div>
            <div class="stat-title">Awards Won</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">3</div>
            <div class="stat-title">Cities Covered</div>
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

.about-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.about-image {
  position: relative;
}

.image-placeholder {
  height: 400px;
  background: var(--background-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
}

.experience-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.section-header {
  margin-bottom: 1.5rem;
}

.section-divider {
  height: 4px;
  width: 60px;
  background: var(--primary-color);
  margin: 0.5rem 0;
  border-radius: 2px;
}

.center-divider {
  margin: 0.5rem auto;
}

.text-center {
  text-align: center;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

.value-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.value-icon {
  width: 30px;
  height: 30px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
}

.value-content h3 {
  margin: 0 0 0.5rem;
  color: var(--primary-color);
}

.value-content p {
  margin: 0;
  font-size: 0.9rem;
}

.timeline-section {
  margin: 6rem 0;
  padding: 4rem 0;
  background: var(--background-color);
  border-radius: 12px;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  width: 4px;
  background: var(--primary-color);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding-left: 60px;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: 10px;
  width: 24px;
  height: 24px;
  background: white;
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  z-index: 1;
}

.timeline-content {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.timeline-date {
  display: inline-block;
  padding: 0.3rem 1rem;
  background: var(--primary-color);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}

.team-card:hover {
  transform: translateY(-10px);
}

.team-member-image {
  font-size: 5rem;
  margin-bottom: 1.5rem;
  background: var(--background-color);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.team-member-position {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 600;
}

.team-member-bio {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.team-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: var(--background-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.social-icon:hover {
  background: var(--primary-color);
  color: white;
}

.stats-section {
  margin: 4rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-title {
  font-size: 1.1rem;
  color: #555;
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .values-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style> 