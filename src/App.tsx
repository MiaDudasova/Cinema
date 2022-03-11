import Container from 'components/Container'
import Head from 'components/Head'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from 'components/AppRouter'
import Header from 'components/Header'
import Navigation from 'components/Navigation'
import { availableThemes } from 'constants/themes'
import { Theme } from 'types/types'
import './styles/demo.scss'
import style from "components/app/App.module.scss"

const App = () => {
  const step = 100 / availableThemes.length

  return (
    <BrowserRouter>
      <Head />
      <Container>
        {params => (
          <div data-theme={params.theme}>
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
