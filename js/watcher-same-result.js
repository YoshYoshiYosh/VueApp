let app = new Vue({
  el: '#app',
  data: {
    name: '',
    upperName: ''
  },
  watch: {
    name: function(newValue, oldValue) {
    _.debounce(this.getUpper, 2000)();
    }
  },
  methods: {
    getUpper: function() {
      this.upperName = this.name.toUpperCase();
    }
  }
});