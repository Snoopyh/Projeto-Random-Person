const JogadoresTotais = [
  { id: 1, nick: "é o Snoopyh", elo: "Platina", url: "../assets/Aatrox.jpg" },
  { id: 2, nick: "Michael Collins", elo: "Ferro", url: "" },
  { id: 3, nick: "Mentifria", elo: "Platina", url: "" },
  { id: 4, nick: "Pica Pau Louco", elo: "Gold", url: "" },
  { id: 5, nick: "Pão com eggs", elo: "Gold", url: "" },
  { id: 6, nick: "10 de abril", elo: "Platina", url: "" },
  { id: 7, nick: "Paris Hilton", elo: "Gold", url: "" },
  { id: 8, nick: "é o Davi né Vida", elo: "Gold", url: "" },
  { id: 9, nick: "Amuleto 1", elo: "Ferro", url: "" },
  { id: 10, nick: "Amuleto 2", elo: "Ferro", url: "" },
  { id: 11, nick: "Amuleto 3", elo: "Ferro", url: "" },
  { id: 12, nick: "Amuleto 4", elo: "Ferro", url: "" },
  { id: 13, nick: "Amuleto 5", elo: "Ferro", url: "" },
];
function GetNumeroAleatorio(array) {
  const GetNumeroAleatorio =
    JogadoresTotais[Math.floor(Math.random() * JogadoresTotais.length)];
  return GetNumeroAleatorio;
}
const time1 = [];
const time2 = [];

for (let i = 0; i < 5; i++) {
  let condicao = true
  while(condicao){
  const resultado1 = GetNumeroAleatorio(JogadoresTotais);
  if (time1.length <= 5 && !time1.includes(resultado1)) {
    time1.push(resultado1);
    condicao = false
  }
  else{
    condicao = true
  }
}
}
for (let i = 0; i < 5; i++) {
  let condicao = true;
  while (condicao) {
    const resultado2 = GetNumeroAleatorio(JogadoresTotais);
    if (
      time2.length <= 5 &&
      !time2.includes(resultado2) &&
      !time1.includes(resultado2)
    ) {
      time2.push(resultado2);
      condicao = false
    }
    else{
      condicao = true
    }
  }
}
console.log(time1);
console.log(time2);
