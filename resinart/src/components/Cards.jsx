import Card from './card'
import imgAgenda from "../assets/agendas/agenda-escura.jpg"

const Cards = () => {
  return (
    <div className="cards">
      <Card
        titulo="Agenda Personalizada"
        descricao=""
        preco="R$ 50,00"
        imagem={imgAgenda} />

      <Card
        titulo="Agenda Personalizada"
        descricao="Agenda personalizada com nome, com capa em resina de cor escura."
        preco="R$ 50,00"
        imagem={imgAgenda} />

    </div>




  )
}

export default Cards