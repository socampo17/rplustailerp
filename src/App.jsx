import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "/App.css";
import clientes from "./pages/clientes";
import login from "./pages/login";
import productos from "./pages/productos";
import ventas from "./pages/ventas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/login" element={<login />} />
        <Route path="productos" element={<productos />} />
        <Route path="ventas" element="{<Ventas/>}" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
