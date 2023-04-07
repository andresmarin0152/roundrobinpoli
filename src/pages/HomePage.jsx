import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="w-10/12 h-[90vh] flex justify-center items-center mx-auto">
      <main>
        <div>
          <h1 className="text-center text-4xl font-bold text-red-500">
            Round Robin
          </h1>
          <p className="text-center text-sm font-light text-gray-500">
            Es un sistema de competición en el que los participantes se
            enfrentan divididos en grupos, en los cuales el ganador de cada
            grupo avanza a una instancia de eliminación directa.
          </p>

          <div className="flex justify-center mt-5">
            <Link
              to="/roundrobin"
              className="inline-block px-8 py-3 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600 transition-colors duration-300"
            >
              Iniciar
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomePage;
