import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))

function Header() {
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

function MainContent () {
  return (
    <main>
        <h1>Reasons I'm excited to learn about React</h1>
        <ol>
          <li>It's super fun!</li>
          <li>It's new and exciting</li>
          <li>I am liking so much.</li>
        </ol>
      </main>
  )
}

function Footer () {
  return (
    <footer>"© 2025 Soares development. All rights reserved."</footer>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />      
    </div>
  )
}

root.render(
  <Page />
)
