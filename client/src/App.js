
import './App.css';
import Login from './componentes/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import Consultas from './componentes/Consultas';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/consultas" element={<Consultas></Consultas>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
