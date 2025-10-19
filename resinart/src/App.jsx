import "./App.css"
import Categorias from './Components/categorias'
import Cards from './components/Cards'
import Banner from "./components/Banner"
import { useState } from "react"

function App() {
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0)

  //setNumCategoriaSelecionada(1)
  return (
    <div className="container">
      <Banner />
      <Categorias numCategoriaSelecionada = {numCategoriaSelecionada} setNumCategoriaSelecionada = {setNumCategoriaSelecionada} />
      <Cards numCategoriaSelecionada = {numCategoriaSelecionada} />
    </div>
  )
}

export default App 