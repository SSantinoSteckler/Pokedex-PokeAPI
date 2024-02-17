const $buttonSearch = document.getElementById('button-search');
const $containerPokemon = document.getElementById('container');
const $containerHabilidades = document.getElementById('container-habilidades');

$buttonSearch.addEventListener('click', buscarPokemon);

function buscarPokemon() {
  const $inputSearch = document
    .getElementById('input-search')
    .value.trim()
    .toLowerCase();

  let apiUrl = `https://pokeapi.co/api/v2/pokemon/${$inputSearch}`;
  fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((response) => mostrarPokemon(response))
    .catch(() => errorPokemon());
}

function errorPokemon() {
  $containerHabilidades.style.display = 'none';
  $containerPokemon.textContent = 'No se encontro el pokemon ingresado';
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('input-search').value = 'pikachu';
  buscarPokemon();
});

function mostrarPokemon(data) {
  $containerHabilidades.style.display = 'block';
  $containerPokemon.innerHTML = `<h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}">`;

  $containerHabilidades.innerHTML = `
<p>PESO =<span> ${data.weight / 10}KG</span>
</p>
<p>ALTURA = <span>${data.height * 5}CM</span></p>
<p>TIPO = <span>${data.types[0].type.name.toUpperCase()}</span></p>
<p>HABILIDAD ESPECIAL = <span> ${data.abilities[1].ability.name.toUpperCase()}</span></p>
<p> ${data.stats[0].stat.name.toUpperCase()} = <span>${
    data.stats[0].base_stat
  }</span></p>
<p> ${data.stats[1].stat.name.toUpperCase()} = <span>${
    data.stats[1].base_stat
  }</span></p>
<p> ${data.stats[2].stat.name.toUpperCase()} = <span>${
    data.stats[2].base_stat
  }</span></p>
<p> ${data.stats[3].stat.name.toUpperCase()} =<span> ${
    data.stats[3].base_stat
  }</span></p>
<p> ${data.stats[4].stat.name.toUpperCase()} =<span> ${
    data.stats[4].base_stat
  }</span></p>
<p> ${data.stats[5].stat.name.toUpperCase()} =<span> ${
    data.stats[5].base_stat
  }</span></p>`;
}
