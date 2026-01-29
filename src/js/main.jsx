import React from 'react';
import ReactDOM from 'react-dom/client'
import SecondsCounter from './components/SecondsCounter';
import '../styles/index.css';
import Swal from 'sweetalert2';


const root = ReactDOM.createRoot(document.getElementById('root'));
let contador = 0;
let intervalo;


function RenderApp() {
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={contador}
        pause={PausarContador}
        reset={ReiniciarContador}
        resume={IniciarContador} />
    </React.StrictMode>,
  )
}


function IniciarContador() {
  clearInterval(intervalo)
  intervalo = setInterval(() => {
    contador++;
    RenderApp();

    if (contador === 10) {
      Swal.fire({
        title: "Atention!",
        text: "Don’t you have anything better to do? You’ve already spent 10 seconds staring at this counter.",
      })

    }
  }, 1000)
}



function PausarContador() {

  clearInterval(intervalo);
}


function ReiniciarContador() {

  contador = 0;
  RenderApp()
  IniciarContador();
}


RenderApp();
IniciarContador();




