let app = new Vue({
  el: '#app',
  data: {
    author: {
      name: '加藤 佳希',
    }
  },
  created: function() {
    let that = this;
    this.timer = setInterval(function() {
      // that.author.company = 'WINGSプロジェクト';
      // Vue.set(that.author, 'company', 'WINGSプロジェクト');
      that.author = Object.assign({}, that.author, {
        company: 'WINGSプロジェクト',
        sex: 'male',
        age: '25'
      })
    }, 3000)
  },
  beforeDestroy: function() {
    clearInterval(this.timer);
  }
})