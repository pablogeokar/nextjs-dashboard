import styled from 'styled-components'
import Card from './Card'
import ContainerGrid from './ContainerGrid'
import InputDate from './InputDate'
import Table from './Table'

const Container = styled.div`   
  grid-area: main;
  margin-top: 1.4rem;    
`

export default function Main() {
  return (

    <Container>

      <h1>Dashboard</h1>

      <InputDate />

      <ContainerGrid columns={3} gap='1.6rem'>
        <Card />
        <Card />
        <Card />
      </ContainerGrid>

      <Table />

    </Container>
  )
}