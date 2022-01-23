import styled from 'styled-components'

const Container = styled.div`
  margin-top: 2rem;
  
  h2{
    margin-bottom: .8rem;
  }

  table{
    background:  ${({ theme }) => theme.colors.white};
    width: 100%;
    border-radius: ${({ theme }) => theme.cardBorderRadius};
    padding: ${({ theme }) => theme.cardPadding};
    text-align: center;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transition: all 300ms ease;

    &:hover{
      box-shadow: none;
    }

    tbody {

      tr:last-child td{
        border: none;
      }

      td{
        height: 2.8rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.darkVariant};
      }
    }
  }

  a{
    text-align: center;
    display: block;
    margin: 1rem auto;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default function Table() {
  return (
    <Container>
      <h2>Recent Orders</h2>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Namber</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foldable Mioni Drone</td>
            <td>85631</td>
            <td>Due</td>
            <td className='warning'>Pending</td>
            <td className='primary'>Details</td>
          </tr>
          <tr>
            <td>Foldable Mioni Drone</td>
            <td>85631</td>
            <td>Due</td>
            <td className='warning'>Pending</td>
            <td className='primary'>Details</td>
          </tr>
          <tr>
            <td>Foldable Mioni Drone</td>
            <td>85631</td>
            <td>Due</td>
            <td className='warning'>Pending</td>
            <td className='primary'>Details</td>
          </tr>
        </tbody>
      </table>
      <a href="#">Show All</a>
    </Container>
  )
}