// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikes = [
  {
  nome: "RIDLEY FENIX C",
  peso: 9.1,
  },
  {
  nome: "SERIOUS VALPAROLA",
  peso: 10.85,
  },
  {
  nome: "FELT FR 30 DISC",
  peso: 9.2,
  },
  {
  nome: "BIANCHI ARIA",
  peso: 8.4,
  },
  {
  nome: "CERVÉLO C2 DISC",
  peso: 8.5,
  },
]

let pesoMin = bikes[0].peso;
let index = 0;

for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].peso < pesoMin) {
    pesoMin = bikes[i].peso;
    index = i;
  }
}

console.log(`La biciletta che pesa meno è la ${bikes[index].nome} con un peso di ${pesoMin} Kg`);
