AFRAME.registerComponent('planet', {
  init: function () {
    const planets = document.querySelector('.planets');

    const BASE_URL = 'https://swapi.dev/api/planets/';
    this.newPlanet = function () {
      let randomNum = Math.floor(Math.random() * 60) + 1;
      fetch(BASE_URL + randomNum)
        .then((response) => response.json())
        .then((data) => {
          planets.setAttribute('text', 'value', data.name);
        });
    };
    console.log(this.el);
    this.el.addEventListener('click', this.newPlanet);
  },
  update: function () {
    this.newPlanet();
  },
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});

AFRAME.registerComponent('film', {
  init: function () {
    const film = document.querySelector('.film');
    const BASE_URL = 'https://swapi.dev/api/films/';
    this.newFilm = function () {
      let randomNum = Math.floor(Math.random() * 5) + 1;
      fetch(BASE_URL + randomNum)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          film.setAttribute('text', 'value', data.title);
        });
    };
    this.el.addEventListener('mouseenter', this.newFilm);
  },
  update: function () {
    this.newFilm();
  },
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});

AFRAME.registerComponent('vehicles', {
  init: function () {
    const vehicles = document.querySelector('.vc');
    const BASE_URL = 'https://swapi.dev/api/vehicles/';
    this.newVehicles = function () {
      let randomNum = Math.floor(Math.random() * 38 ) + 1;
      fetch(BASE_URL + randomNum)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          vehicles.setAttribute('text', 'value', data.name);
        });
    };
    this.el.addEventListener('mouseleave', this.newVehicles);
  },
  update: function () {
    this.newVehicles();
  },
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});
