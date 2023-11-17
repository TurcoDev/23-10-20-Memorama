

function crearTablero(cantFichas) {

  let tablero = document.getElementById("tablero");
  let fichas = [];
  // ["<div class="ficha"></div>", "<div class="ficha"></div>", "<div class="ficha"></div>"]

  for (let index = 1; index <= cantFichas; index += 2) {
    for (let rep = 0; rep <= 1; rep++) {
      fichas.push(`
        <div class="ficha" id="ficha${index + rep}" onclick="seleccionFicha(${index + rep})">
          <div class="ambos_lados ficha_frente">
            ${index}
          </div>
          <div class="ambos_lados ficha_atras">
            ❓
          </div>
        </div>
      `);
    }
  }

  // console.log(fichas);
  // fichas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = fichas.join('');
  // "<div class="ficha">1</div><div class="ficha">1</div><div class="ficha">2</div>"
}

let seleccionados = [];

function seleccionFicha(numFicha) {
  let ficha = document.getElementById(`ficha${numFicha}`);
  // console.log(ficha);
  if (!seleccionados.includes(numFicha)) {
    ficha.style.transform = "rotateY(180deg)";
    seleccionados.push(numFicha);
    console.log(seleccionados);
  }

  if (seleccionados.length == 2) {
    deseleccionar(seleccionados);
    seleccionados = [];
  }
}


function deseleccionar(fichasSeleccionadas) {

  setTimeout(() => {
    let fichaFrente1 = document.getElementById(`ficha${fichasSeleccionadas[0]}`).children[0];
    let fichaFrente2 = document.getElementById(`ficha${fichasSeleccionadas[1]}`).children[0];
    // console.log(fichaFrente1);
    // console.log(fichaFrente2);
    if (fichaFrente1.innerText !== fichaFrente2.innerText) {
      let ficha1 = document.getElementById(`ficha${fichasSeleccionadas[0]}`);
      let ficha2 = document.getElementById(`ficha${fichasSeleccionadas[1]}`);
      ficha1.style.transform = "rotateY(0deg)";
      ficha2.style.transform = "rotateY(0deg)";
    } else {
      fichaFrente1.style.background = "blueviolet";
      fichaFrente2.style.background = "blueviolet";
    }
  }, 1000);
}