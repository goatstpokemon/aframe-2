AFRAME.registerComponent('foo', {
  init: function () {
    const plane = document.getElementById('plane');
    let quote;
    fetch('https://api.kanye.rest/')
      .then((res) => res.json())
      .then((data) => {
        quote = data;
      });
    plane.addEventListener('mouseenter', function (e) {
      console.log('hey');
      console.log(quote.quote);
    });
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});
