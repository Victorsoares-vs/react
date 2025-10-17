import React from 'react'
import "./App.css"
import imgResinart from "./assets/Resinart-removebg.png"
import Categorias from './Components/categorias'

function App() {
  return (
    <div className="container">
      <div className='banner'>
        <img src={imgResinart} alt="Banner da Resinart" />
      </div>

      <Categorias/>

      <div className="cards">
        <div className="card">
          <div className="card__textos">
            <h2 className="card__titulo">Agenda personalizada</h2>
            <p>Agenda personalizada em resina, com Nome e flores, modelo resina escura</p>
            <p className="card__preco">R$ 50,00</p>
          </div>

          <div className="card__img">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 