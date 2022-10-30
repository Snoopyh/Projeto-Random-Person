import "../assets/Aatrox.jpg";
const JogadoresTotais = [
  { id: 1, nick: "é o Snoopyh", url: " ", frase: "The Best Zyra" },
  { id: 2, nick: "Michael Collins", url: " ", frase: "The Best Singed Malasia" },
  { id: 3, nick: "Mentifria", url: " ", frase: "The Best Udyr Haitiano" },
  { id: 4, nick: "Pica Pau Louco", url: " ", frase: "The Best Evellyn Conga" },
  { id: 5, nick: "Pão com eggs", url: " ", frase: "The Best Eggs" },
  { id: 6, nick: "10 de abril", url: " ", frase: "The Best" },
  { id: 7, nick: "Paris Hilton", url: " ", frase: "The Best" },
  { id: 8, nick: "é o Davi né Vida", url: " ", frase: "The Best" },
  { id: 9, nick: "Amuleto 1", url: " ", frase: "The Best" },
  { id: 10, nick: "Amuleto 2", url: " ", frase: "The Best" },
  { id: 11, nick: "Amuleto 3", url: " ", frase: "The Best" },
  { id: 12, nick: "Amuleto 4", url: " ", frase: "The Best" },
  { id: 13, nick: "Amuleto 5", url: " ", frase: "The Best" },
];
function GetNumeroAleatorio(array) {
  const GetNumeroAleatorio =
    JogadoresTotais[Math.floor(Math.random() * JogadoresTotais.length)];
  return GetNumeroAleatorio;
}

const time1 = [];
const time2 = [];

for (let i = 0; i < 5; i++) {
  let condicao = true;
  while (condicao) {
    const resultado1 = GetNumeroAleatorio(JogadoresTotais);
    if (time1.length <= 5 && !time1.includes(resultado1)) {
      time1.push(resultado1);
      condicao = false;
    } else {
      condicao = true;
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
      condicao = false;
    } else {
      condicao = true;
    }
  }
}
const AllTeams = { time1, time2 };
export default AllTeams;
