$(document).ready(function () {

// Milestone 1

// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
const cats = [
  {
  nome: "Birillo",
  eta: 11,
  colore: "Arancione",
  sesso: "Maschio",
  },
  {
  nome: "Luna",
  eta: 7,
  colore: "Marrone",
  sesso: "Femmina",
  },
  {
  nome: "Shiva",
  eta: 14,
  colore: "Bianco",
  sesso: "Femmina",
  },
  {
  nome: "Romeo",
  eta: 3,
  colore: "Nero",
  sesso: "Maschio",
  },
  {
  nome: "Briciola",
  eta: 8,
  colore: "Arancione",
  sesso: "Femmina",
  },
  {
  nome: "Artù",
  eta: 16,
  colore: "Rosso",
  sesso: "Maschio",
  },
  {
  nome: "Cleopatra",
  eta: 15,
  colore: "Nero",
  sesso: "Femmina",
  },
  {
  nome: "Stella",
  eta: 2,
  colore: "Bianco",
  sesso: "Femmina",
  },
]

// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

cats.forEach((item) => {
  $('#cats-m1').append(`<li>${item.nome} è di colore ${item.colore} </li>`)
});

// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso

const gattiMaschi = cats.filter((item) => item.sesso == "Maschio")
console.log(gattiMaschi);

const gattiFemmine = cats.filter((item) => item.sesso == "Femmina")
console.log(gattiFemmine);

 // Aggiungere fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.

gattiMaschi.forEach((item) => {
  let colore;
    if (item.eta < 4) {
      colore = "cucciolo_maschio";
    } else if (item.eta >= 4 && item.eta < 8) {
      colore = "giovane_maschio";
    } else if (item.eta >= 8 && item.eta < 12) {
      colore = "adulto_maschio";
    } else {
      colore = "anziano_maschio";
    }
      $('#cats-m2').append(`<li class="${colore}">${item.nome} è ${item.sesso} <i class="fas fa-ribbon"></i></li>`)
    });

gattiFemmine.forEach((item) => {
  let colore;
    if (item.eta < 4) {
      colore = "cucciolo_femmina";
    } else if (item.eta >= 4 && item.eta < 8) {
      colore = "giovane_femmina";
    } else if (item.eta >= 8 && item.eta < 12) {
      colore = "adulto_femmina";
    } else {
      colore = "anziano_femmina";
    }
      $('#cats-m2').append(`<li class="${colore}">${item.nome} è ${item.sesso} <i class="fas fa-ribbon"></i></li>`)
    });

// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e opacità del fiocco per ogni gatto.


const nuovoFemmine = gattiFemmine.map((element, i, array) => {
  let nuovaProprieta = {
    ...element,
    opacita: 0,
  }
  return nuovaProprieta;
})

const nuovoMaschi = gattiMaschi.map((element, i, array) => {
  let nuovaProprieta = {
    ...element,
    opacita: 0,
  }
  return nuovaProprieta;
})

const result = [...nuovoFemmine, ...nuovoMaschi];

nuovoFemmine.forEach((item) => {
  let op;
  let colore = "rosa"
    if (item.eta < 6) {
      op = "cucciolo_op1",
      item.opacita = 0.3
    } else if (item.eta >= 6 && item.eta < 12) {
      op = "giovane_op2",
      item.opacita = 0.6
    }  else {
      op = "anziano_op3",
      item.opacita = 1
    }
      $('#cats-m3').append(`<li class="${colore} ${op}">${item.nome} è di colore ${item.colore} <i class="fas fa-ribbon"></i></li>`)
    });

nuovoMaschi.forEach((item) => {
  let op;
  let colore = "azzurro"
    if (item.eta < 6) {
      op = "cucciolo_op1";
      item.opacita = 0.3
    } else if (item.eta >= 6 && item.eta < 12) {
      op = "giovane_op2";
      item.opacita = 0.6
    }  else {
      op = "anziano_op3";
      item.opacita = 1
    }
      $('#cats-m3').append(`<li class="${colore} ${op}">${item.nome} è di colore ${item.colore} <i class="fas fa-ribbon"></i></li>`)
    });

const newResult = result.map(element => {
  let {nome,colore,opacita} = element
  return {nome,colore,opacita}
})

console.log(newResult);
})
