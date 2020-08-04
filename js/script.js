// ottengo il dato "chilometri" tramite comando prompt
const km = parseInt(prompt('Chilometri da percorrere?'));
document.getElementById('km').innerHTML = km;

// ottengo il dato "age" tramite comando prompt
const age = parseInt(prompt('Qual è la tua età?'));
document.getElementById('age').innerHTML = age;

const kmPrice = 0.21;
const currentPrice = km * kmPrice;

const calcPrice = (km, age) => {
  if (isNaN(km) || isNaN(age)) {
    alert('Inserire solo dati numerici');
  } else if (age < 18) {
    return currentPrice - (currentPrice * 20) / 100;
  } else if (age > 65) {
    return currentPrice - (currentPrice * 40) / 100;
  } else {
    return currentPrice;
  }
};

// modifico l'elemento h2 con id=prezzo
document.getElementById('price').innerHTML = `${calcPrice(km, age)}€`;