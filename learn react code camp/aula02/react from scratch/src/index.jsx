import { createRoot } from 'react-dom/client'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
const root = createRoot(document.getElementById('root'))

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
