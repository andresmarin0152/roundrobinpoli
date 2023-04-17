import { useContext, useState } from "react";
import Table from "./Table";
import FormAddProcess from "./FormAddProcess";
import { toast } from "react-toastify";
import { ProcessContext } from "../context/ProcessContext";
import { Link } from "react-router-dom";
const Contain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { processes, setProcesses } = useContext(ProcessContext);

  const deleteProcess = (id) => {
    toast.success("Se ha eliminado correctamente el proceso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const newProcesses = processes.filter((process) => process.id !== id);
    setProcesses(newProcesses);
  };
  return (
    <div className="mt-5 py-11 px-48">
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-red-500 text-white font-bold hover:bg-red-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Agregar proceso
        </button>
      </div>
      {(processes.length && <Table deleteProcess={deleteProcess} />) || null}
      <FormAddProcess
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {(processes.length && (
        <div className="flex justify-center">
          <Link
            to="/results"
            className="bg-red-500 text-white font-bold hover:bg-red-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Ejecutar Round Robin
          </Link>
        </div>
      )) ||
        null}
    </div>
  );
};

export default Contain;
