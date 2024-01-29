import React from 'react';
import './App.css'
import './App.js'
import '../Cartwidget/Cartwidget.jsx'

let Menu = '';

function App(){
  const abrirMenu = () =>{
    let menu = document.getElementById('menu');
    let botonCerrar = document.getElementById('boton-menu');
    menu.classList.toggle('abrir.menu');
    botonCerrar.classList.toggle('colocar-x');
  }
  return (
    <>
    <header>
      <div className='barras'>
        <button oneClick={abrirMenu} className='boton-menu' id='boton-menu'></button>
      </div>
      <nav id='menu' className='desplegable'>
        <ul>
        <div className='logo'></div>
          <li><a href= {Menu}>Menu</a></li>
          <li><a href= {Menu}>Productos</a></li>
          <li><a href= {Menu}>Nosotros</a></li>
          <li><a href= {Menu}>Contacto</a></li>
        </ul>
        <i className="bi bi-cart2"></i>
      </nav>

    </header>
    </>
  );
};

export default App;

