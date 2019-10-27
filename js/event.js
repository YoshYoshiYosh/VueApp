let app = new Vue({
  el: '#app',
  data: {
    message: '',
    flag: false
  },
  methods: {
    onclick: function() {
      if (!this.flag) {
        let that = this;
        this.flag = true;
        this.timerObj = setInterval(() => {
          that.message = new Date().toLocaleString();
        }, 1000);
      } else {
        clearInterval(this.timerObj);
      }
    }
  }
})