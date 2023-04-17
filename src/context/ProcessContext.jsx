import { createContext, useState } from "react";

export const ProcessContext = createContext();

const ProcessContextProvider = ({ children }) => {
  const [processes, setProcesses] = useState([]);
  const data = {
    processes,
    setProcesses,
  };
  return (
    <ProcessContext.Provider value={{ processes, setProcesses }}>
      {children}
    </ProcessContext.Provider>
  );
};

export default ProcessContextProvider;
