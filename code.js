const { createApp, ref } = Vue

createApp({
    setup() {
      const message = ref('Hello, sick World!')
      return {
        message
      }
    }
  }).mount('#app')