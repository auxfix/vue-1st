const { createApp, ref } = Vue

createApp({
    setup() {
      const message = ref('Hello, dear sick World! Have a nice and Beautiful day!')
      return {
        message
      }
    }
  }).mount('#app')