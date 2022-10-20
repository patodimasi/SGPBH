import React from 'react';
import { useState} from "react"; 
import axios from "axios";
import '../css/signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFile } from '@fortawesome/free-solid-svg-icons'


function Consultas(){
/*  const submitValue = async(e) => {


    axios
      .post('http://localhost:3001/api')
      .then(() => console.log('Creado'))
      .catch(err => {
        console.error(err);
      });
  };
  */
    return (
        <div>   
          <div className='navbar'>
            <h2>&nbsp;&nbsp;SGPB</h2>
          </div>
          <div className='flex'>
            <div className='sidebar'>
              <ul className='list'>
                
                <li className='icon'>
                    <a href="#" className='enlace'>
                      <FontAwesomeIcon icon={faSearch} />
                      &nbsp;Consultas
                    </a>
                </li>
                <li className='icon'>
                    <a href="#" className='enlace'>
                    <FontAwesomeIcon icon={faFile} />
                    &nbsp;Documentos
                    </a>
                </li>
                <li className='icon'>
                    <a to="">Productos</a>
                </li>
                <li className='icon'>
                    <a to="">Usuarios</a>
                </li>
                <li className='icon'>
                    <a to="">Pendientes</a>
                </li>
                <li className='icon'>
                    <a to="">Control de Calidad</a>
                </li>
              </ul>
                </div>
              </div>  
            </div>   
       );
}

export default Consultas;