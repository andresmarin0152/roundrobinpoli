import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-2 text-red-500">404</h1>
        <p className="text-lg mb-4">La página que buscas no existe.</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600 transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
