// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
$(document).ready(function () {
const squadre = [
  {
  nome: "Juve",
  punti_fatti: 0,
  falli_subiti: 0,
  },
  {
  nome: "Milan",
  punti_fatti: 0,
  falli_subiti: 0,
  },
  {
  nome: "Inter",
  punti_fatti: 0,
  falli_subiti: 0,
  },
  {
  nome: "Sassuolo",
  punti_fatti: 0,
  falli_subiti: 0,
  },
  {
  nome: "Lazio",
  punti_fatti: 0,
  falli_subiti: 0,
  },
]

let risultati = [];

for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti_fatti = numeri(0, 42);
  squadre[i].falli_subiti = numeri(0, 24);


  const {nome, falli_subiti} = squadre[i];
  risultati.push({
    nome,
    falli_subiti
  })

}


console.log(risultati);


})


function numeri(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}
