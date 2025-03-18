<template>
  <div class="contact-page">
    <h1 class="page-title animate__animated animate__fadeIn">Contact Us</h1>
    <div class="contact-container animate__animated animate__fadeInUp">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Please fill out the form below or use our contact information.</p>
        
        <div class="info-items">
          <div class="info-item hover-effect">
            <i class="fas fa-map-marker-alt pulse"></i>
            <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
          </div>
          <div class="info-item hover-effect">
            <i class="fas fa-phone pulse"></i>
            <span>+1 (555) 123-4567</span>
          </div>
          <div class="info-item hover-effect">
            <i class="fas fa-envelope pulse"></i>
            <span>info@sickworldresidence.com</span>
          </div>
        </div>

        <div class="social-links">
          <a href="#" class="social-icon" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-icon" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-icon" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="social-icon" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div v-if="showSuccess" class="success-message animate__animated animate__fadeIn">
          <i class="fas fa-check-circle"></i>
          Message sent successfully!
        </div>

        <div class="form-group">
          <label for="name">Full Name</label>
          <div class="input-group">
            <i class="fas fa-user"></i>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              placeholder="Enter your full name"
              :disabled="isSubmitting"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              placeholder="Enter your email"
              :disabled="isSubmitting"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <div class="input-group">
            <i class="fas fa-heading"></i>
            <input
              id="subject"
              v-model="formData.subject"
              type="text"
              required
              placeholder="Enter subject"
              :disabled="isSubmitting"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <div class="input-group">
            <i class="fas fa-comment-alt"></i>
            <textarea
              id="message"
              v-model="formData.message"
              required
              placeholder="Enter your message"
              rows="5"
              :disabled="isSubmitting"
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          class="submit-btn" 
          :disabled="isSubmitting"
        >
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else class="loading">
            <i class="fas fa-spinner fa-spin"></i> Sending...
          </span>
        </button>
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

const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData.value)
    showSuccess.value = true
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
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
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  background: #fff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.contact-container:hover {
  transform: translateY(-5px);
}

.contact-info {
  padding: 1rem;
  position: relative;
}

.contact-info h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;
}

.info-items {
  margin-top: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.hover-effect:hover {
  background: #f8f9fa;
  transform: translateX(5px);
}

.info-item i {
  margin-right: 1rem;
  color: #4a90e2;
  font-size: 1.2rem;
}

.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.social-links {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #4a90e2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-3px);
  background: #357abd;
}

.contact-form {
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 12px;
  position: relative;
}

.success-message {
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  background: #4CAF50;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

.input-group {
  position: relative;
}

.input-group i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #4a90e2;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem 2.5rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

textarea {
  padding-left: 2.5rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

input:disabled,
textarea:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.submit-btn {
  background: #4a90e2;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:not(:disabled):hover {
  background: #357abd;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .contact-info,
  .contact-form {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style> 