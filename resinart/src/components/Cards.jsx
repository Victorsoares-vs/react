import Card from './card'
import imgAgenda from "../assets/agendas/agenda-escura.jpg"
import imgAgenda2 from "../assets/agendas/agenda-chaveiro-azul.jpg"
import imgAgenda3 from "../assets/agendas/agenda-chaveiro-rosa.jpg"
import imgAgenda4 from "../assets/agendas/agenda-kit.jpg"
import imgAgenda5 from "../assets/agendas/agenda-caneta.jpg"


const Cards = () => {
  return (
    <div className="cards">
      <Card
        titulo="Agenda Personalizada"
        descricao="Agenda personalizada com nome, com capa em resina de cor escura."
        preco="R$ 50,00"
        imagem={imgAgenda} />

      <Card
        titulo="Agenda Personalizada"
        descricao="Agenda personalizada com nome, com capa em resina bicolor degradê com brilho."
        preco="R$ 50,00"
        imagem={imgAgenda2} />

      <Card
        titulo="Agenda Personalizada"
        descricao="Agenda personalizada com nome, com capa em resina bicolor, padrão fenda, com brilho."
        preco="R$ 50,00"
        imagem={imgAgenda3} />

      <Card
        titulo="Kit Agenda"
        descricao="Conjunto contendo Agenda personalizada, chaveiro, marca-páginas e caneta."
        preco="R$ 150,00"
        imagem={imgAgenda4} />

      <Card
        titulo="Kit Agenda"
        descricao="Conjunto contendo Agenda personalizada, chaveiro, marca-páginas e caneta (Monocolorido)."
        preco="R$ 150,00"
        imagem={imgAgenda5} />
    </div>

  )
}

export default Cards