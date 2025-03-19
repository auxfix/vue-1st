<template>
  <div class="contact-page">
    <h1 class="animate__animated animate__fadeIn">
      Contact Us
    </h1>
    <p class="animate__animated animate__fadeIn animate__delay-1s">
      Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
    </p>
    <div class="contact-container animate__animated animate__fadeIn animate__delay-2s">
      <div class="contact-info">
        <div class="info-item">
          <i class="fas fa-map-marker-alt" />
          <div>
            <h3>Location</h3>
            <p>123 Luxury Lane, Beverly Hills, CA 90210</p>
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-phone" />
          <div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope" />
          <div>
            <h3>Email</h3>
            <p>info@sickworldresidence.com</p>
          </div>
        </div>
        <div class="social-links">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook" /></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram" /></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter" /></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin" /></a>
        </div>
      </div>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <div class="input-group">
            <i class="fas fa-user" />
            <input id="name" v-model="form.name" type="text" required>
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-group">
            <i class="fas fa-envelope" />
            <input id="email" v-model="form.email" type="email" required>
          </div>
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <div class="input-group">
            <i class="fas fa-phone" />
            <input id="phone" v-model="form.phone" type="tel">
          </div>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <div class="input-group">
            <i class="fas fa-comment" />
            <textarea id="message" v-model="form.message" rows="5" required />
          </div>
        </div>
        <button type="submit" :disabled="isSubmitting" class="submit-btn">
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else class="loading">
            <i class="fas fa-spinner fa-spin" />
            Sending...
          </span>
        </button>
      </form>
    </div>
    <div v-if="showSuccess" class="success-message animate__animated animate__fadeIn">
      Thank you for your message! We'll get back to you soon.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const showSuccess = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    showSuccess.value = true
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Add meta tags for SEO
useHead({
  title: 'Contact Us - Sick World Residence',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Sick World Residence. Contact us for inquiries about our luxury properties and services.'
    }
  ]
})
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

p {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-info {
  padding-right: 2rem;
  border-right: 1px solid #eee;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.info-item i {
  font-size: 1.5rem;
  color: #007bff;
  margin-right: 1rem;
  margin-top: 0.25rem;
}

.info-item h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.info-item p {
  margin: 0;
  color: #666;
  text-align: left;
}

.social-links {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #007bff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #0056b3;
}

.contact-form {
  display: grid;
  gap: 1.5rem;
}

.form-group {
  display: grid;
  gap: 0.5rem;
}

label {
  color: #333;
  font-weight: 500;
}

.input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.input-group i {
  position: absolute;
  left: 1rem;
  color: #666;
}

input, textarea {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #007bff;
}

.submit-btn {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #0056b3;
}

.submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.success-message {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #28a745;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  .contact-info {
    padding-right: 0;
    border-right: none;
    border-bottom: 1px solid #eee;
    padding-bottom: 2rem;
  }
}
</style>
