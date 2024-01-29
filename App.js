import React from 'react';
import './App.css'
import '../src/components/Title/Cartwidget/Cartwidget.jsx'


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
      <div className='card'>
        <div class='card-1'>
          <img className='anillo' src='../Images/Anillo-esmeralda.jpg'/>
          <button>Comprar</button>
          <i className="bi bi-cart2"></i>
          <input type="number" id="number-form" placeholder="Cantidad"></input>
        </div>
        <div class='card-2'>
          <img className='aretes' src='../Images/Aretes-esmeralda.jpg'/>
          <button>Comprar</button>
          <i className="bi bi-cart2"></i>
          <input type="number" id="number-form" placeholder="Cantidad"></input>
        </div>
        <div class='card-3'>
          <img className='pulsera' src='../Images/pulseraesmeralda.jpg'/>
          <button>Comprar</button>
          <i className="bi bi-cart2"></i>
          <input type="number" id="number-form" placeholder="Cantidad"></input>
        </div>
        
      </div>

    </header>
    </>
 )}; 

export default App;

