import Card from './card'
import {itemAgendas, itemArtigos, itemChaveiros, itemMoveis} from "../assets/catalogo"

const Cards = () => {
  const itensCategoria = [itemAgendas, itemArtigos, itemChaveiros, itemMoveis ]
  const categoriaSelecionada = itensCategoria[2] 

  return (
    <div className="cards">
      {categoriaSelecionada.map(item => (
        <Card
          titulo= {item.nome}
          descricao= {item.descricao}
          preco= {item.preco}
          imagem= {item.imagem}
        />
      ))}
    </div>
  )
}

export default Cards