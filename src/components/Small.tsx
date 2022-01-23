import { ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  children?: ReactNode
}

const Text = styled.small`
  color: ${({ theme }) => theme.colors.infoDark};
`

export default function Small({ children }: IProps) {
  return (
    <Text>{children}</Text>
  )
}