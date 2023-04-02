import { useState } from "react";

const processFormRoundRobin = () => {
  const [processInfo, setProcessInfo] = useState({
    name: "",
    arrivalTime: "",
    ncpu_es: [
      {
        ncpu: "",
        ncpu_es: "",
      },
    ],
  });

  const [processes, setProcesses] = useState([]);

  const handleNCPUChange = (event, index) => {
    const { name, value } = event.target;
    const updatedNCPU_ES = [...processInfo.ncpu_es];
    updatedNCPU_ES[index][name] = value;
    setProcessInfo((prevState) => ({
      ...prevState,
      ncpu_es: updatedNCPU_ES,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProcessInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const addES = () => {
    setProcessInfo((prevState) => ({
      ...prevState,
      ncpu_es: [
        ...prevState.ncpu_es,
        {
          ncpu: "",
          ncpu_es: "",
        },
      ],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setProcesses((prevState) => [...prevState, processInfo]);
    setProcessInfo({
      name: "",
      arrivalTime: "",
      ncpu_es: [
        {
          ncpu: "",
          ncpu_es: "",
        },
      ],
    });
  };

  return (
    <div className="max-w-[1400px] my-8 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-[400px] w-[400px] mx-auto"
      >
        <h2 className="text-2xl text-gray-700 font-bold mb-4">
          Agregar proceso
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre del proceso
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            value={processInfo.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="arrival-time"
            className="block text-gray-700 font-bold mb-2"
          >
            Tiempo de llegada (ms)
          </label>
          <input
            type="number"
            name="arrivalTime"
            id="arrival-time"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            value={processInfo.arrivalTime}
            onChange={handleInputChange}
            required
          />
        </div>
        {processInfo.ncpu_es.map((ncpu_es, index) => (
          <div key={index}>
            <div className="mb-4">
              <label
                htmlFor="quantum-time"
                className="block text-gray-700 font-bold mb-2"
              >
                NCPU en Quantum
              </label>
              <input
                type="number"
                name="ncpu"
                id="quantum-time"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                value={ncpu_es.ncpu}
                onChange={(event) => handleNCPUChange(event, index)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="io-quantum"
                className="block text-gray-700 font-bold mb-2"
              >
                Quantum de E/S
              </label>
              <input
                type="number"
                name="ncpu_es"
                id="io-quantum"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                value={ncpu_es.ncpu_es}
                onChange={(event) => handleNCPUChange(event, index)}
                required
              />
            </div>
          </div>
        ))}
        <section className="flex justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              addES();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Agregar E/S
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Agregar proceso
          </button>
        </section>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Procesos agregados:</h2>
        {processes.length === 0 && <p>No se han agregado procesos aún.</p>}
        <section className="grid grid-cols-3 gap-5">
          {processes.map((process, index) => (
            <div
              key={index}
              className="border rounded p-4 mb-4 flex flex-col justify-center items-center gap-3"
            >
              <p className="font-bold">Nombre del proceso: {process.name}</p>
              <div>
                {process.ncpu_es.map((process, index) => (
                  <div
                    key={index - "343443"}
                    className="border rounded p-4 flex flex-col"
                  >
                    <p className="font-bold">
                      NCPU en Quantum:{" "}
                      <span className="font-light">{process.ncpu} quantum</span>
                    </p>
                    <p className="font-bold">
                      Quantum de E/S: {process.ncpu_es} quantum
                    </p>
                  </div>
                ))}
              </div>
              <p>Tiempo de llegada: {process.arrivalTime} ms</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default processFormRoundRobin;
