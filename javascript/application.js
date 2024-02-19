import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import MoviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", MoviesController)


























// RECAP
// const button = document.querySelector('#click-me');
// const button = document.getElementById('click-me');

// button.addEventListener('click', (event) => {
//   console.log('o botão foi clicado!');
//   // event.currentTarget.innerText = 'Bingo!';
//   button.innerText = 'Bingo!';
//   button.classList.remove('btn-primary');
//   button.classList.add('btn-success');
//   button.setAttribute('disabled', '');
// })
