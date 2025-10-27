export default function Header() {
  return (
    <header>
        <img className='logo' src="src/assets/React-Logo-PNG.png" alt="Logo react"  />
        <nav className='nav-bar'>
          <ul className='ul-el'>
            <li className='li-el'>Pricing</li>
            <li className='li-el'>About</li>
            <li className='li-el'>Contact</li>
          </ul>
        </nav>
      </header>
  )
}

//Podemos exportar uma função dessa forma, primeiro criando a função normalmente e depois, adicionando antes dela o comando "export default".
//A outra forma, é como está exemplificado no componente "MainContent".



 