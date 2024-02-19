import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['button', 'link']

  connect() {
    // console.log("O controller de button foi conectado!!");
  }

  disable() {
    console.log('O botão foi clicado!');
    console.log(this.element);
    console.log(this.buttonTarget);

    this.buttonTarget.innerText = 'Bingo!';
    this.buttonTarget.classList.remove('btn-primary');
    this.buttonTarget.classList.add('btn-success');
    this.buttonTarget.setAttribute('disabled', '');

    this.linkTarget.classList.remove('d-none');
  }

  resetBtn() {
    console.log('o link foi clicado!');

    this.buttonTarget.innerText = 'Click me!';
    this.buttonTarget.classList.remove('btn-success');
    this.buttonTarget.classList.add('btn-primary');
    this.buttonTarget.removeAttribute('disabled');

    this.linkTarget.classList.add('d-none');
  }
}
