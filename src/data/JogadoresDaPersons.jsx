

const JogadoresTotais = [
  { id: 1, nick: "é o Snoopyh", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zyra_4.jpg", frase: "Iscubidobidoo" },
  { id: 2, nick: "Michael Collins", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Singed_3.jpg", frase: "Inale Toxína" },
  { id: 3, nick: "Mentifria", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Udyr_5.jpg", frase: "The Best Udyr Haitiano" },
  { id: 4, nick: "Pica Pau Louco", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Evelynn_2.jpg", frase: "The Best Evellyn Conga" },
  { id: 5, nick: "Pão com eggs", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rakan_2.jpg", frase: "Gorzox" },
  { id: 6, nick: "10 de abril", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_2.jpg", frase: "Petista" },
  { id: 7, nick: "Paris Hilton", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Syndra_4.jpg", frase: "The Best Lgbtqia+" },
  { id: 8, nick: "é o Davi né Vida", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zed_10.jpg", frase: "Dafiiiiiii " },
  { id: 9, nick: "Neto", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shaco_1.jpg", frase: "The Shaco TROLL" },
  { id: 10, nick: "BicloneMaconhaWolf", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ivern_0.jpg", frase: "Smooking every day" },
  { id: 11, nick: "Kaiogre", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Velkoz_1.jpg", frase: "A caia vei" },
  { id: 12, nick: "Amuleto 4", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Hecarim_4.jpg", frase: "Pedra do time" },
  { id: 13, nick: "Amuleto 5", url: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zac_1.jpg", frase: "Pedra do time" },
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
