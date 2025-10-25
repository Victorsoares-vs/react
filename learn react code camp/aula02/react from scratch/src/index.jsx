import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))

function Page() {
  return (
    <div>
      <header>
        <img src="src/assets/React-Logo-PNG.png" alt="Logo react" width= "40px" />
      </header>
      <main>
        <h1>Reasons i'm excited to learn about React</h1>
        <ol>
          <li>It's super fun!</li>
          <li>It's new and exciting</li>
          <li>I am liking so much.</li>
        </ol>
      </main>
      <footer>"© 2025 Soares development. All rights reserved."</footer>
    </div>
  )
}

root.render(
  <Page />
)
