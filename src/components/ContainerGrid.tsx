import { ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  columns?: number
  gap?: string
  children?: ReactNode
}

const Container = styled.div<IProps>`
    display: grid;
    grid-template-columns: repeat(${p => p.columns},1fr);
    gap: ${p => p.gap};

    @media screen and (max-width: 1200px){    
      grid-template-columns: 1fr;
      gap: 0;    
   }
`


export default function ContainerGrid({ children, columns = 3, gap = '1.6rem' }: IProps) {
  return (
    <Container columns={columns} gap={gap}>
      {children}
    </Container>
  )
}