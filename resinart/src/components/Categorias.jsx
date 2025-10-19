const Categorias = ({numCategoriaSelecionada, setNumCategoriaSelecionada}) => {
  
  return (
    <div className= "categorias">
      <p className= {"categoria" + (numCategoriaSelecionada === 0 
        ? " categoria--selecionada"
        : "")
      } 
      onClick={() => setNumCategoriaSelecionada(0)}>Agendas</p>

      <p className= {"categoria" + (numCategoriaSelecionada === 1 
        ? " categoria--selecionada"
        : "")
      } onClick={() => setNumCategoriaSelecionada(1)}>Artigos</p>

      <p className= {"categoria" + (numCategoriaSelecionada === 2 
        ? " categoria--selecionada"
        : "")
      } onClick={() => setNumCategoriaSelecionada(2)}>Chaveiros</p>

      <p className= {"categoria" + (numCategoriaSelecionada === 3 
        ? " categoria--selecionada"
        : "")
      } onClick={() => setNumCategoriaSelecionada(3)}>Móveis</p>
    </div>
  )
}

export default Categorias