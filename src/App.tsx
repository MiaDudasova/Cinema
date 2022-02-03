import Container from 'components/Container'
import Head from 'components/Head'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from 'components/AppRouter'
import Header from 'components/Header'
import Navigation from 'components/Navigation'

const App = () => {
  return (
    <BrowserRouter>
      <Head />
      <Container>
        {params => (
          <div>
            <Header />
            <Navigation />
            <AppRouter />
          </div>
        )}
      </Container>
    </BrowserRouter>
  )
}

export default App
