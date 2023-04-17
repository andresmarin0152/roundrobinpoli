import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import Header from "./components/Header";
import Contain from "./components/Contain";
import ResultsPage from "./pages/ResultsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProcessContextProvider from "./context/ProcessContext";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <ProcessContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/roundrobin" element={<Contain />}></Route>
            <Route path="/results" element={<ResultsPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </ProcessContextProvider>
      </Router>
    </>
  );
}

export default App;
