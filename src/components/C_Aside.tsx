import styled from 'styled-components'

const Container = styled.div`    
  grid-area: aside;
`

export default function Aside() {
  return (
    <Container>
      <h1>Aside</h1>
    </Container>
  )
}