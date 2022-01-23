import styled from 'styled-components'
import Card from './Card'
import Table from './Table'
import Top from './Top'

const Container = styled.div`
  margin-top: 1.4rem;  
  .date{
    display: inline-block;
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.borderRadius1};
    margin-top: 1rem;
    padding: .5rem 1.6rem;

    input[type='date']{
      background: transparent;
      color:${({ theme }) => theme.colors.dark};
    }
  }

  .cards{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1.6rem;
  }
  @media screen and (max-width: 1200px){
    .cards{
      grid-template-columns: 1fr;
      gap: 0;
      }
   }
   @media screen and (max-width: 768px){
    
   }
`

export default function Main() {
  return (
    <Container>

      <Top />

      <h1>Dashboard</h1>

      <div className="date">
        <input type="date" />
      </div>

      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>

      <Table />

    </Container>
  )
}