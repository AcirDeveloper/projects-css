const inputtCard2 = document.querySelector('#inputtCard2');
const inputDate = document.querySelector('#inputDate');
const inputCVV = document.querySelector('#inputCVV');

const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

let current = '';
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

// Eventos de escucha al presionar el boton
inputtCard2.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    return;
  }

  e.preventDefault();
  handleInput(maskNumber, e.key, cardNumber);
  inputtCard2.value = cardNumber.join('');
});

inputDate.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    return;
  }

  e.preventDefault();
  handleInput(maskDate, e.key, dateNumber);
  inputDate.value = dateNumber.join('');
});

inputCVV.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    return;
  }

  e.preventDefault();
  handleInput(maskCVV, e.key, cvvNumber);
  inputCVV.value = cvvNumber.join('');
});

// Configuracion y parte importante de la mascara
function handleInput(mask, key, arr) {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (key === 'Backspace' && arr.length > 0) {
    arr.pop();
    return;
  }
  if (numbers.includes(key) && arr.length + 1 <= mask.length) {
    if (mask[arr.length] === '-' || mask[arr.length] === '/') {
      arr.push(mask[arr.length], key);
    } else {
      arr.push(key);
    }
  }
}

/**
 * * Importante
 * ? Api
 * Todo: Considerar
 * ! Imprensindible
 * @param consider es el metodo utilizado tal
 */
