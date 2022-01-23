import styled from 'styled-components'

const Container = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  overflow-x: hidden;
`

export default function ProfilePhoto() {
  return (
    <Container>
      <img src="https://github.com/pablogeokar.png" />
    </Container>
  )
}