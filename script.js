window.onload = () => {
  const places = document.getElementsByClassName('js--places');
  const camera = document.getElementById('js--camera');

  let pickups = document.getElementsByClassName('js--pickup');
  let hold = null;

  const placables = document.getElementsByClassName('js--placable');
  let scene = document.getElementById('js--scene');

  const addListeners = () => {
    // Pickup
    for (let i = 0; i < pickups.length; i++) {
      pickups[i].addEventListener('click', function (e) {
        // prettier-ignore
        if(hold !== "box") {     
      camera.innerHTML +=
        '<a-box id="js--hold" class="js--pickup js--interact" color="green" position="1 -1 -1" ></a-box>';
      hold = "box";
      this.remove();
    }
      });
    }
  };
  addListeners();

  // Teleport
  for (let i = 0; i < places.length; i++) {
    places[i].addEventListener('click', function (e) {
      let att = document.createAttribute('animation');
      // prettier-ignore
      att.value = `property: position; easing: linear; dur: 1000; to:  ${
        this.getAttribute('position').x
      }
        ${this.getAttribute('position').y + 1.6},
       ${this.getAttribute('position').z}`;

      camera.setAttribute('animation', att.value);
    });
  }

  // Placable
  for (let i = 0; i < placables.length; i++) {
    placables[i].addEventListener('click', function (e) {
      if (hold !== null) {
        let box = document.createElement('a-box');
        box.setAttribute('class', 'js--pickup js--interact');
        box.setAttribute('color', 'green');
        box.setAttribute('position', {
          x: this.getAttribute('position').x,
          y: '0.5',
          z: this.getAttribute('position').z,
        });
        scene.appendChild(box);

        document.getElementById('js--hold').remove();

        addListeners();
        hold = null;
        this.removeAttribute('class', 'js--placable');
      }
    });
  }
};

// Les 1
/* 
 camera.setAttribute('position', {
        x: this.getAttribute('position').x,
        y: '1.6',
        z: this.getAttribute('position').z,
      });

*/

// Les 2
/*
let att = document.createAttribute('animation');
// prettier-ignore
att.value =
        `property: position; easing: linear; dur: 1000; to:  ${
        this.getAttribute('position').x}
        ${'1.6'},
       ${this.getAttribute('position').z}`;

console.log(att.value);
camera.setAttribute('animation', att.value);
*/

// Les 3
/* 
let pickups = document.getElementsByClassName('js--pickup');
let hold = null;
for (let i = 0; i < pickups.length; i++) {
    pickups[i].addEventListener('click', function (e) {
      // prettier-ignore
      if(hold !== "box") {     
      camera.innerHTML +=
        '<a-box class="js--pickup js--interact" color="green" position="1 -1 -1" ></a-box>';
      hold = "box";
      this.remove();
    }
    });
  }
*/

// Les 4
/* 
  let placables = document.getElementsByClassName('js--placable');
  const scene = document.getElementById('js--scene');

  // Placable
  for (let i = 0; i < placables.length; i++) {
    placables[i].addEventListener('click', function (e) {
      if (hold !== null) {
        let box = document.createElement('a-box');
        box.setAttribute('class', 'js--pickup js--interact');
        box.setAttribute('color', 'green');
        box.setAttribute('position', {
          x: this.getAttribute('position').x,
          y: '0.5',
          z: this.getAttribute('position').z,
        });
        scene.appendChild(box);

        document.getElementById('js--hold').remove();

        addListeners();
        hold = null;
        this.removeAttribute('class', 'js--placable');
      }
    });
  }
*/
