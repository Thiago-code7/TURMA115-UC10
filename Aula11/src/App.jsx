import Home from "./pages/home/Home";
import CadastroPage from "./pages/cadastroPage/cadastroPage";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
