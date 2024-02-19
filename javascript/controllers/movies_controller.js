import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'list']

  static values = {
    baseUrl: String
  }

  connect() {
    console.log('o controller de filmes foi conectado!');
  }

  search() {
    const inputText = this.inputTarget.value;
    const url = `${this.baseUrlValue}?s=${inputText}&apikey=adf1f2d7`;

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.listTarget.innerHTML = '';

        data.Search.forEach((movie) => {
          const movieTag = `<li class="list-group-item">
            <img src=${movie.Poster} width=100 height=100%>
          </li>`;

          this.listTarget.insertAdjacentHTML('beforeend', movieTag);
        })
      })
  }
}
