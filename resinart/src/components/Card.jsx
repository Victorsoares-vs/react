import imgAgenda from "../assets/agendas/agenda-escura.jpg"

const Card = () => {
  return (
    <div className="card">
      <div className="card__textos">
        <h2 className="card__titulo">Agenda Personalizada</h2>
        <p>Agenda personalizada em resina, com Nome e flores, modelo resina escura</p>
        <p className="card__preco">R$ 50,00</p>
      </div>

      <div className="card__img">
        <img src={imgAgenda} alt="Foto do Produto" />
      </div>
    </div>
  )
}

export default Card