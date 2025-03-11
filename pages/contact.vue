<template>
  <div class="contact-page">
    <header class="page-header">
      <div class="container">
        <h1 class="animate__animated animate__fadeIn">Contact Us</h1>
        <p class="animate__animated animate__fadeIn animate__delay-1s">
          Get in touch with our team
        </p>
      </div>
    </header>

    <main class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2>Our Information</h2>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <p>123 Real Estate Ave, City, Country</p>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <p>+1 234 567 890</p>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <p>contact@realestate.com</p>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="formData.subject"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Form submitted:', formData.value)
}
</script>

<style scoped>
.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
}

.contact-info {
  padding: 2rem;
  background: var(--background-color);
  border-radius: 12px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
}

input,
textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

.btn {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style> 