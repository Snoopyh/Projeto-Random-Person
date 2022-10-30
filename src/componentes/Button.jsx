import React from "react";


export default function (props) {
  return (
    <div className="flex justify-center items-center">
    <div className="bg-slate-100 text-black px-20 rounded-md font-bold flex h-12 justify-center items-center border-4 border-black hover:bg-gradientButton">
      <button onClick={props.GetTime}>{props.nome}</button>
    </div>
    </div>
  );
}
