<template>
  <div class="contact-page">
    <h1 class="page-title">Contact Us</h1>
    <div class="contact-container">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Please fill out the form below or use our contact information.</p>
        
        <div class="info-items">
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <span>+1 (555) 123-4567</span>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <span>info@sickworldresidence.com</span>
          </div>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            placeholder="Enter your full name"
          >
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            placeholder="Enter your email"
          >
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            id="subject"
            v-model="formData.subject"
            type="text"
            required
            placeholder="Enter subject"
          >
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            placeholder="Enter your message"
            rows="5"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', formData.value)
  // Reset form after submission
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
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
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.contact-info {
  padding: 2rem;
}

.contact-info h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
}

.info-items {
  margin-top: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.info-item i {
  margin-right: 1rem;
  color: #4a90e2;
}

.contact-form {
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4a90e2;
}

.submit-btn {
  background: #4a90e2;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #357abd;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .contact-info,
  .contact-form {
    padding: 1rem;
  }
}
</style> 