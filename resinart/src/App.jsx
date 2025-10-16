import React from 'react'
import "./App.css"
import imgResinart from "./assets/Resinart-removebg.png"

function App() {
  return (
    <div className="container">
      <div className='banner'>
        <img src= {imgResinart} alt="Banner da Resinart" />
      </div>

      <div className="categorias">
        <p className="categoria">Agendas</p>
        <p className="categoria">Artigos</p>
        <p className="categoria">Chaveiros</p>
        <p className="categoria">Móveis</p>
      </div>
    </div>
  ) 
}

export default App 