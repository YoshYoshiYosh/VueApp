let app = new Vue({
  el: '#app',
  data: {
    message: 'みなさん、お元気ですかぁ？',
    message_v: 'みなさん、お元気ですかぁ？ Ver.v-text',
    url: 'https://github.com/YoshYoshiYosh/share_map',
    flag: false,
    email: 'TEST-EMAIL@live.jp',
    current: new Date().toLocaleString()
  },
  
  computed: {
    localEmail: function() {
      return this.email.split('@')[0].toLowerCase();
    },
    randomc: function() {
      return Math.random();
    }
  },

  methods: {
    localEmailMethod: function() {
      return this.email.split('@')[0].toLowerCase();
    },
    onclick: function() {
      this.current = new Date().toLocaleString();
    },
    randomm: function() {
      return Math.random();
    }
  }
});