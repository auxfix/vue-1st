const { createApp, ref } = Vue

createApp({
    setup() {
      const message = ref('Hello!!')
      return {
        message
      }
    }
  }).mount('#app')