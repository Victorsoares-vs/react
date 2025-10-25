import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))

function Page() {
  return (
    <ol>
      <li>It's super fun!</li>
      <li>It's new and exciting</li>
      <li>I am liking so much.</li>
    </ol>
  )
}

root.render(
  <Page />
)
