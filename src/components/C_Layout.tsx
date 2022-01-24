import { ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  children?: ReactNode
}

const Container = styled.div`
  display: grid;
  width: 96%;
  margin: 0 auto;  
  gap: 1.8rem;
  grid-template-columns: 14rem auto 23rem;
  grid-template-rows: 60px calc(100vh - 180px) 60px;
  grid-template-areas:  "menu header header"
                        "menu main aside"
                        "menu main aside";
`

export default function Layout({ children }: IProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}