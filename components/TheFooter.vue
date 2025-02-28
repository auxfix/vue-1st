<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>About Us</h3>
        <p>{{ footerAbout }}</p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li v-for="link in footerLinks" :key="link.id">
            <NuxtLink :to="link.href">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact Info</h3>
        <p>{{ contactInfo.address }}</p>
        <p>{{ contactInfo.email }}</p>
        <p>{{ contactInfo.phone }}</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ year }} {{ brandName }}. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const brandName = ref('Sick World Residence')
const footerAbout = ref('We are dedicated to providing exceptional living spaces that combine luxury, comfort, and convenience.')

const footerLinks = ref([
  { id: 1, text: 'About Us', href: '/about' },
  { id: 2, text: 'Services', href: '/services' },
  { id: 3, text: 'Privacy Policy', href: '/privacy' }
])

const contactInfo = ref({
  address: '123 Luxury Avenue, Cityville, ST 12345',
  email: 'info@sickworldresidence.com',
  phone: '+1 (555) 123-4567'
})

const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--secondary-color);
  color: white;
  padding: 4rem 2rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer-section a:hover {
  opacity: 0.8;
}

.footer-bottom {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}
</style> 