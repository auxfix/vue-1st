const { createApp, ref } = Vue

createApp({
  setup() {
    const title = ref('Welcome to Our Amazing Platform')
    const features = ref([
      { id: 1, title: 'Easy to Use', description: 'Simple and intuitive interface for everyone' },
      { id: 2, title: 'Powerful Features', description: 'Advanced capabilities at your fingertips' },
      { id: 3, title: '24/7 Support', description: 'We here to help you anytime' }
    ])
    const year = ref(new Date().getFullYear())

    return {
      title,
      features,
      year
    }
  }
}).mount('#app')