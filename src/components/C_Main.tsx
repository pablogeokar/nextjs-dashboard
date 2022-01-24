import styled from 'styled-components'
import Footer from './C_Footer'

const Container = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: main;
`

export default function Main() {
  return (
    <Container>
      <h1>conteúdo</h1>
      <Footer />
    </Container>
  )
}