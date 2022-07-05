window.onload = function () {
  color = 'black'
}

const colorPalette = document.getElementsByClassName('color')[0];
const colorPalette1 = document.getElementsByClassName('color')[1];
const colorPalette2 = document.getElementsByClassName('color')[2];
const colorPalette3 = document.getElementsByClassName('color')[3];

colors = {
  cor: colorPalette.style.backgroundColor = 'black',
  cor2: colorPalette1.style.backgroundColor = generateColors(),
  cor3: colorPalette2.style.backgroundColor = generateColors(),
  cor4: colorPalette3.style.backgroundColor = generateColors(),
};

let pixelBoard = document.getElementById('pixel-board');
let pixel = document.querySelectorAll('.pixel');

let color = '';

colorPalette.addEventListener('click', function(event){
  color = event.target.style.backgroundColor;
});

colorPalette1.addEventListener('click', function(){
  color = colorPalette1.style.backgroundColor;
});

colorPalette2.addEventListener('click', function(){
  color = colorPalette2.style.backgroundColor;
});

colorPalette3.addEventListener('click', function(){
  color = colorPalette3.style.backgroundColor;
});

// REMOVER E ADICIONAR O SELECTED

function addSelected(event) {
  event.target.classList.add('selected');
}

const cores = document.getElementsByClassName('color');

function tiraSelect() {
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].classList.remove('selected');
  }
}

for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', tiraSelect);
  cores[i].addEventListener('click', addSelected);
}

let boardSize = document.getElementById('board-size');
let generateBoard = document.getElementById('generate-board');

// CONDIÇÃO PARA LIBERAR OS QUADRADOS, SENDO MAIOR QUE 5 E MENOR QUE 50

function checkValue(){
  let valueButton = boardSize.value;
  if (boardSize.value === 0) {
    alert('Board inválido!')
  } else if(valueButton < 5) {
    valueButton = 5;
    generateBoard2()
  } else if (valueButton > 50) {
    valueButton = 50;
    generateBoard2()
  } else {
    generateBoard2()
  }
}

generateBoard.addEventListener("click", checkValue);

// GERAR QUADRADINHOS

  function generateBoard2(){
    // pixelBoard.innerHTML = ''
    const boarded = document.getElementById('pixel-board');
    const input = document.getElementById('board-size');
    let inputValue = input.value;
    boarded.style.height = inputValue * 44 + 'px';
    boarded.style.width = inputValue * 44 + 'px';
    const matriz = inputValue ** 2;
    for (let index = 0; index < matriz; index += 1) {
      const divs = document.createElement('div');
      divs.classList.add('pixel');
      divs.style.backgroundColor = '#fff';
      boarded.appendChild(divs);
    }
    colorsApply()
  }

  for (let index = 1; index <= 5; index += 1) {
    const board = document.getElementById('pixel-board');
    const divs = document.createElement('div');
    divs.classList.add('pixel');
    board.appendChild(divs);
  }

  //BOARD INVÁLIDO

  function createBoardUser() {
    const board = document.getElementById('pixel-board');
    const input = document.getElementById('board-size');
  
    board.innerText = '';
    if (input.value === '') {
      alert('Board inválido!');
    } else {
      boardUser();
    }
  }

// COLORIR

  function colorsApply() {
    pixel = document.querySelectorAll('.pixel');
    for (let index of pixel) {
      let test = index
      test.addEventListener("click", function(event){
        event.target.style.backgroundColor = color
      })
    }
  }
  colorsApply()
  
const clearButton = document.getElementById('clear-board');

// LIMPAR

clearButton.addEventListener('click', function(){
  for (const index of pixel) {
    const test = index;
    test.style.backgroundColor = 'white';
  }
});

// GERAR CORES ALEATÓRIAS

function generateColors() {
  const hex = '123456789ABCDEF';
  let colors = '#';

  for (let index = 0; index < 6; index += 1) {
    colors += hex[Math.floor(Math.random() * 14)];
  }
  return colors;
}
