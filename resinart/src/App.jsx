import "./App.css"
import Categorias from './Components/categorias'
import Cards from './components/Cards'
import Banner from "./components/Banner"

function App() {
  return (
    <div className="container">
      <Banner />
      <Categorias />
      <Cards />
    </div>
  )
}

export default App 