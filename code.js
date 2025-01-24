const { createApp, ref } = Vue

createApp({
    setup() {
      const message = ref('Hello, sick World! Have a nice day!')
      return {
        message
      }
    }
  }).mount('#app')