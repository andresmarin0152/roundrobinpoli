import { useState } from "react";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-center text-lime-400">Round Robin</h1>
      <p className="my-3">Ya pueden utilizar tailwindcss</p>
    </div>
  );
}

export default App;
