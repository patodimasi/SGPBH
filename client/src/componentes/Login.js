import React from 'react';
import { useState} from "react"; 
import axios from "axios";
import '../css/signin.css';
import {useNavigate} from "react-router-dom";

function Login(){

  const [fName, setfName] = useState('');
  const [fPass, setfPass] = useState('');

  const navigate = useNavigate();

  const submitValue = async(e) => {

      const frmdetails = {
        'usuario' : fName,
        'pass' : fPass,
       
     }

    //lo muestro en el cliente
    console.log(frmdetails);
 


    axios
      .post('http://localhost:3001/login', frmdetails)
      .then(() => navigate("/consultas"))
      .catch(err => {
        console.error(err);
      });
  };
    return (
        <div className="Auth-form-container">
          <form  className="Auth-form">
            <div className="Auth-form-content">
              <img src={require('../imagenes/boherdi.png')} alt='logobo'className="center" />
              <h3 className="Auth-form-title">Sistema de Gestión de planos Boherdi</h3>
              <div className="form-group mt-3">
                <label>User</label>
                <input
                  onChange={e => setfName(e.target.value)}
                  className="form-control mt-1"
                  
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  onChange={e => setfPass(e.target.value)}
                  type="text"
                  className="form-control mt-1"
                  //placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button onClick={submitValue} type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
             
            </div>
          </form>
        </div>
    );

}

export default Login;