import React, { useContext } from "react";
import Results from "../components/Results";
import { ProcessContext } from "../context/ProcessContext";

const ResultsPage = () => {
  const { processes } = useContext(ProcessContext);
  return (
    <main className="px-8 py-12">
      <h1 className="text-red-500 font-bold text-4xl">Resultado</h1>
      <p>
        Aqui encontraras el los resultados del <strong>Round Robin</strong> de
        los procesos agregados anteriormente.
      </p>
      <Results />
    </main>
  );
};

export default ResultsPage;
