import React,{useState , useEffect} from "react";
import Button from "./componentes/Button";
import Moldura from "./componentes/Moldura";
import { JogadoresTotais } from "./data/JogadoresDaPersons";

import "./styles/main.css";

function App() {
  const [time1 ,setTime1] = useState([])
  const [time2 ,setTime2] = useState([])
  useEffect(() => {
    GetTime()
    
  },[])
  function GetNumeroAleatorio(array) {
    const GetNumeroAleatorio =
      JogadoresTotais[Math.floor(Math.random() * JogadoresTotais.length)];
    return GetNumeroAleatorio;
  }
  const GetTime=() => {
    let time1 = []
    let time2 = []
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
    setTime1(time1)
    setTime2(time2)
    }
    
  return (
    <>
      <div className="max-w-[1100px] mx-auto flex flex-row gap-2 items-center mt-10 mb-2">
        <Moldura teams={time1} />
      </div>
      <Button nome="Aleatorio" GetTime={GetTime} />
      <div className="max-w-[1100px] mx-auto flex flex-row gap-2 items-center my-2">
        <Moldura teams={time2} />
      </div>
    </>
  );
}

export default App;
