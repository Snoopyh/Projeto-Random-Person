

export const JogadoresTotais = [
  { id: 1, nick: "é o Snoopyh", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zyra_4.jpg", frase: "Iscubidobidoo" },
  { id: 2, nick: "Michael Collins", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Singed_3.jpg", frase: "Representando todos os guaxinim" },
  { id: 3, nick: "Mentifria", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Udyr_5.jpg", frase: "Sou Hetero, So que Afeminado" },
  { id: 4, nick: "Pica Pau Louco", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Evelynn_2.jpg", frase: "Toretto" },
  { id: 5, nick: "Pão com eggs", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rakan_2.jpg", frase: "Gorzox" },
  { id: 6, nick: "10 de abril", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_2.jpg", frase: "Anão Bombado" },
  { id: 7, nick: "Paris Hilton", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zoe_2.jpg", frase: "swade krupp" },
  { id: 8, nick: "é o Davi né Vida", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zed_10.jpg", frase: "OGGGGGGGGGGGGGG" },
  { id: 9, nick: "Neto", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shaco_1.jpg", frase: "The Shaco TROLL" },
  { id: 10, nick: "BicloneMaconhaWolf", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ivern_0.jpg", frase: "Smooking every day" },
  { id: 11, nick: "Kaiogre", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Velkoz_1.jpg", frase: "Bastardo" },
  { id: 12, nick: "Pica Pau Loko", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vayne_2.jpg", frase: "Inimigo Da Saida" },
  { id: 13, nick: "Amuleto 1", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zac_1.jpg", frase: "Pedra do time" },
  { id: 14, nick: "Amuleto 2", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zac_1.jpg", frase: "Pedra do time" },
  { id: 15, nick: "Amuleto 3", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zac_1.jpg", frase: "Pedra do time" },
  { id: 16, nick: "Amuleto 4", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zac_1.jpg", frase: "Pedra do time" },
  { id: 17, nick: "Amuleto 5", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zac_1.jpg", frase: "Pedra do time" },
];
function GetNumeroAleatorio(array) {
  const GetNumeroAleatorio =
    JogadoresTotais[Math.floor(Math.random() * JogadoresTotais.length)];
  return GetNumeroAleatorio;
}

const time1 = [];
const time2 = [];
export const GetTime=() => {
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
}
GetTime()
const AllTeams = { time1, time2 };
export default AllTeams;
