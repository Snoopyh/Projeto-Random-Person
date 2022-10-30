import React from "react";
import Button from "./componentes/Button";
import Moldura from "./componentes/Moldura";
import AllTeams from "./data/JogadoresDaPersons";

import "./styles/main.css";

function App() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto flex flex-row gap-2 items-center mt-10 mb-2">
        <Moldura teams={AllTeams.time1} />
      </div>
      <Button />
      <div className="max-w-[1100px] mx-auto flex flex-row gap-2 items-center my-2">
        <Moldura teams={AllTeams.time2} />
      </div>
    </>
  );
}

export default App;
