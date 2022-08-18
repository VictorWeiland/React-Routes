import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Index";
import Sobre from "./Pages/Sobre";
import Contatos from "./Pages/Contatos";
import Header from "./Components/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
