new Vue({
  el: '#exercise',
  data: {
      name: 'Josh',
      age: 25,
      image: 'https://icdn2.digitaltrends.com/image/spacex-starman-falcon-heavy.jpg'
  },
  methods: {
    random: function() {
      return Math.random();
    }
  }
});
