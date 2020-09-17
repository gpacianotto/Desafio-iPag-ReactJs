import React from 'react';
import './App.css';
import Tabuleiro from './Tabuleiro';


function App() {
  return (
    <div className="fundo">

      <div className="quadroNegroSuperior">
        <h1 className="letras2">Jogo da Velha</h1>
      </div>
      

      <Tabuleiro /> 
    </div>
  );
}

export default App;
