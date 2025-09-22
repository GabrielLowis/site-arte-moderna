import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Slider from "./pages/Slider";
import Marco from "./pages/Marco";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/semana22" element={<Marco />} />
        <Route path="/home" element={<Home />} />


        <Route path="*" element={<div>Erro</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
