let app = new Vue({
  el: '#app',
  data: {
    path: './images/wings.jpg'
  },
  methods: {
    onerror: function() {
      this.path = './images/no.jpg'
    }
  }
});