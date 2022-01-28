import styled from 'styled-components'

const Container = styled.div`
   display: inline-block;
   background: ${({ theme }) => theme.colors.light};
   border-radius: ${({ theme }) => theme.borderRadius1};
   margin-top: 1rem;
   padding: .5rem 1.6rem;

   input[type='date']{
      background: transparent;
      color:${({ theme }) => theme.colors.dark};
    }
`

export default function InputDate() {
  return (
    <Container>
      <input type="date" />
    </Container>
  )
}