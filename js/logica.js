

function crearTablero(cantFichas) {
  
  let tablero = document.getElementById("tablero");
  let fichas = [];
  // ["<div class="ficha"></div>", "<div class="ficha"></div>", "<div class="ficha"></div>"]

  for (let index = 1; index <= cantFichas; index+=2) {
    for (let rep = 0; rep < 2; rep++) {
      fichas.push(`<div class="ficha">${index}</div>`);
    }
  }
  
  console.log(fichas);
  
  fichas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = fichas.join('');
  // "<div class="ficha"></div><div class="ficha"></div><div class="ficha"></div>"
}