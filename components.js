AFRAME.registerComponent('foo', {
  init: function () {
    const plane = document.getElementById('plane');
    let quote;
    fetch('https://swapi.dev/api/planets/1/')
      .then((res) => res.json())
      .then((data) => {
        quote = data;
      });
    plane.addEventListener('mouseenter', function (e) {
      console.log(quote);
    });
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});
