import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "./shared/Modal";
import { toast } from "react-toastify";
import { ProcessContext } from "../context/ProcessContext";

const FormAddProcess = ({ isModalOpen, setIsModalOpen }) => {
  const { processes, setProcesses } = useContext(ProcessContext);
  const [processInfo, setProcessInfo] = useState({
    id: uuidv4(),
    name: "",
    arrivalTime: "",
    ncpu_es: [
      {
        ncpu: "",
        ncpu_es: "",
      },
    ],
  });

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
    setProcesses((prevProcesses) => [...prevProcesses, processInfo]);
    setProcessInfo({
      id: uuidv4(),
      name: "",
      arrivalTime: "",
      ncpu_es: [
        {
          ncpu: "",
          ncpu_es: "",
        },
      ],
    });
    toast.success("Se ha guardado correctamente el proceso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form
          onSubmit={handleSubmit}
          className="rounded mx-auto max-w-[400px] w-[400px]"
        >
          <h2 className="text-2xl text-center text-red-500 font-bold mb-4">
            AGREGAR PROCESO
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Nombre del proceso
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-red-500 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-red-500 leading-tight focus:outline-none focus:shadow-outline"
              value={processInfo.arrivalTime}
              onChange={handleInputChange}
              required
            />
          </div>
          <section className="h-44 overflow-auto mb-5">
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
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-red-500 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-red-500 leading-tight focus:outline-none focus:shadow-outline"
                    value={ncpu_es.ncpu_es}
                    onChange={(event) => handleNCPUChange(event, index)}
                    required
                  />
                </div>
              </div>
            ))}
          </section>
          <section className="flex justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                addES();
              }}
              className="bg-red-500 text-white font-bold hover:bg-red-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Agregar E/S
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white font-bold hover:bg-red-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y hover:scale-110"
            >
              Aceptar
            </button>
          </section>
          <button
            className="text-center flex justify-center w-full mt-3 text-gray-300"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
        </form>
      </Modal>
    </>
  );
};

export default FormAddProcess;
