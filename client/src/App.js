
import './App.css';
import Login from './componentes/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/signin.css';
import { useState} from "react"; 
import axios from "axios";

function App() {
  return (
    <div className="App">
        <Login/>
    </div>
  );
}

export default App;
