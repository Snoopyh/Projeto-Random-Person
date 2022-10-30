import React, { Fragment } from "react";


export default function ({ teams }) {
  console.log(teams);

  return (
    <>
      {teams.map((jogadores) => (
        <Fragment key={jogadores.id}>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src={jogadores.url.toString()} alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                {jogadores.nick}
              </strong>
              <span className="text-zinc-300 text-sm block mt-1">
                {jogadores.frase}{" "}
              </span>
            </div>
          </a>
          ;
        </Fragment>
      ))}
    </>
  );
}
