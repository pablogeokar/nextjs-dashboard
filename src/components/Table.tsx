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
  @media screen and (max-width: 1200px){
    width: 94%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 2rem 0 0 8.8rem;

    table{
      width: 83vw;

      thead tr th:last-child, & thead tr th:first-child{
        display: none;            
      }
      tbody tr td:last-child, tbody tr td:first-child{
        display: none;
      }
    }
  }
  @media screen and (max-width: 768px){
    position: relative;
    margin: 3rem 0 0 0;
    width: 100%;

    table{
      width: 100%;
      margin: 0;
    }
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