

function crearTablero(cantFichas) {
  
  let tablero = document.getElementById("tablero");
  let fichas = [];
  // ["<div class="ficha"></div>", "<div class="ficha"></div>", "<div class="ficha"></div>"]

  for (let index = 0; index < cantFichas; index++) {
    fichas.push(`<div class="ficha"></div>`);
  }
  
  console.log(fichas);
  
  tablero.innerHTML = fichas.join('');
  // "<div class="ficha"></div><div class="ficha"></div><div class="ficha"></div>"
}