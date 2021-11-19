const app = {
    data() {
      return {
        header: 'Turbo Project Demo',
        content: 'Resize the browser window to see how your content is responsive to the size of the window.'
      }
    }
  }
  
  Vue.createApp(app).mount('#app')