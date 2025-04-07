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
        <div class="about-grid">
          <div class="about-image">
            <div class="image-placeholder">🏢</div>
            <div class="experience-badge">
              <div class="badge-number">5+</div>
              <div class="badge-text">Years Experience</div>
            </div>
            <div class="image-overlay"></div>
            <div class="image-progress">
              <div class="progress-circle">
                <svg viewBox="0 0 36 36" class="circular-chart">
                  <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path class="circle" stroke-dasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div class="progress-value">85%</div>
              </div>
              <div class="progress-label">Project Completion</div>
            </div>
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
          <p class="section-subtitle">A timeline of our growth and achievements</p>
        </div>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in timelineItems" :key="index">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">{{ item.date }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="timeline-progress">
                <div class="progress-bar">
                  <div class="progress-fill" :style="{ width: item.progress + '%' }"></div>
                </div>
                <div class="progress-label">{{ item.progress }}% Complete</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="team-section">
        <div class="section-header text-center">
          <h2 class="section-title">Our Team</h2>
          <div class="section-divider center-divider"></div>
          <p class="section-subtitle">Meet the people behind our success</p>
        </div>
        <div class="team-grid">
          <div v-for="member in team" :key="member.id" class="team-card">
            <div class="team-member-image">
              {{ member.avatar }}
            </div>
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
        <div class="section-header text-center">
          <h2 class="section-title">Our Impact</h2>
          <div class="section-divider center-divider"></div>
          <p class="section-subtitle">Numbers that speak for themselves</p>
        </div>
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

const timelineItems = ref([
  {
    date: '2020',
    title: 'Company Founded',
    description: 'Sick World Residence was established with a vision to transform luxury living.',
    progress: 100
  },
  {
    date: '2021',
    title: 'First Project Completed',
    description: 'Successfully delivered our first residential complex with 100% occupancy.',
    progress: 100
  },
  {
    date: '2022',
    title: 'Expansion to New Markets',
    description: 'Extended our operations to three new cities with innovative concepts.',
    progress: 100
  },
  {
    date: '2023',
    title: 'Sustainability Initiative',
    description: 'Launched our green building program, incorporating eco-friendly practices.',
    progress: 85
  },
  {
    date: 'Present',
    title: 'Continuing Innovation',
    description: 'Currently developing next-generation smart homes with cutting-edge technology.',
    progress: 65
  }
])

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

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(var(--primary-color-rgb), 0.1), rgba(var(--secondary-color-rgb), 0.1));
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.about-image:hover .image-overlay {
  opacity: 1;
}

.experience-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--primary-color);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: center;
  transform: rotate(3deg);
  transition: transform 0.3s ease;
}

.experience-badge:hover {
  transform: rotate(0deg) scale(1.05);
}

.badge-number {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
}

.badge-text {
  font-size: 0.9rem;
  opacity: 0.9;
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
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.5s ease forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }
.timeline-item:nth-child(5) { animation-delay: 0.5s; }

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
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
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.team-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--primary-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.team-card:hover::before {
  transform: scaleX(1);
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
  transition: transform 0.3s ease;
}

.team-card:hover .team-member-image {
  transform: scale(1.1);
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
  position: relative;
  overflow: hidden;
}

.social-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.social-icon:hover::after {
  width: 100%;
  height: 100%;
}

.social-icon span {
  position: relative;
  z-index: 1;
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
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-10px);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  position: relative;
}

.stat-number::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-color);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-number::after {
  transform: scaleX(1);
  transform-origin: left;
}

.stat-title {
  font-size: 1.1rem;
  color: #555;
}

.section-subtitle {
  color: #666;
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.image-progress {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

.about-image:hover .image-progress {
  transform: translateY(0);
  opacity: 1;
}

.progress-circle {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 0.5rem;
}

.circular-chart {
  display: block;
  width: 100%;
  height: 100%;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3;
}

.circle {
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 3;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

.progress-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-color);
}

.progress-label {
  font-size: 0.8rem;
  color: #666;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.timeline-progress {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed #eee;
}

.timeline-progress .progress-bar {
  height: 4px;
  background: #eee;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.3rem;
}

.timeline-progress .progress-fill {
  height: 100%;
  background: var(--primary-color);
  border-radius: 2px;
  transition: width 1s ease;
}

.timeline-progress .progress-label {
  font-size: 0.7rem;
  color: #777;
  text-align: right;
}

.team-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
}

.team-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--primary-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.team-card:hover::after {
  transform: scaleX(1);
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .experience-badge {
    right: 20px;
  }
}

@media (max-width: 576px) {
  .values-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .experience-badge {
    position: relative;
    right: 0;
    bottom: 0;
    margin-top: 1rem;
    transform: none;
  }

  .experience-badge:hover {
    transform: none;
  }
}
</style>
