import React from "react";
import {
  CodeIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgImg from "../assets/cyber-bg.png";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 m-auto max-w-[1240px]">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing and Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Programming</h1>
          <p className="text-2xl">This is our Tech brand</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img src={bgImg} className="w-full" alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Servies</p>
          <div className="flex flex-wrap px-4 justify-between">
            <p className="flex px-4 py-2 text-slate-500">
              <CodeIcon className="h-6 text-indigo-600" /> Code
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600" /> Database
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
