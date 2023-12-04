import styled from 'styled-components'
import Header from './components/Cabecalho/index'
import Hero from './components/Hero/index'
import ListaVagas from './containers/ListaVagas/index'

import './global.css'

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

@media (max-width: 1024px) {
    max-width: 80%;
}
`

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
