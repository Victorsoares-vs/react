const Card = (props) => {
  return (
    <div className="card">
      <div className="card__textos">
        <h2 className="card__titulo">{props.titulo}</h2>
        <p>{props.descricao}a</p>
        <p className="card__preco">{props.preco}</p>
      </div>

      <div className="card__img">
        <img src={props.imagem} alt="Foto do Produto" />
      </div>
    </div>

  )
}

export default Card