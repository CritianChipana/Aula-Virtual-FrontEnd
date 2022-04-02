import React, { useState } from 'react'
import "./App.css";

const Prueba = () => {

  const [count, setcount] = useState(0);
  const [nombre, setNombre] = useState("pedro");
  
  
    const aumentar = () => {
      
      setcount( count + 1 );

    }
    
    const cambiar = () =>{
      
      setNombre('miguel');
      
    }

    const [open, setOpen] = useState(true)

    const ocultar = () => {

      if( open === true ){
        document.getElementById("rojo3").style.visibility = 'hidden';
        setOpen(false);
      }else {
        document.getElementById("rojo3").style.visibility = 'visible';
        setOpen(true);
      }
    }



  return (
    <div>
    <p>{count}</p>
    <p>{nombre}</p>

    <div id="rojo3" className='rojo2'  >azul</div>


    <button onClick={ ocultar } >ocultar</button>

    <button onClick={aumentar} >aumentar</button>
    <button onClick={ cambiar } >cambiar nombre</button>
    </div>
  )
}

export default Prueba