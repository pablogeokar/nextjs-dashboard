import styled from 'styled-components'
import ProfileContainer from '../containers/ProfileContainer'
import RecentUpdates from '../containers/RecentUpdates'
import Small from './Small';


const Container = styled.div`
  margin-top: 1.4rem;
  
  .sales-analytics{
    margin-top: 2rem;
    h2{
      margin-bottom: .8rem;
    }
    .item{
      background: ${({ theme }) => theme.colors.white};
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: .7rem;
      padding: 1.4rem ${({ theme }) => theme.cardPadding};
      border-radius: ${({ theme }) => theme.borderRadius3};
      box-shadow: ${({ theme }) => theme.boxShadow};
      transition: all 300ms ease;
      .icon{
        padding: .6rem;
        color: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        background:${({ theme }) => theme.colors.primary};
        display: flex;
      }
      .right{
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin: 0;
        width: 100%;
      }
      &.offline .icon{
        background:${({ theme }) => theme.colors.danger};
      }
      &.customers .icon{
        background:${({ theme }) => theme.colors.success};
      }      
      &:hover{
        box-shadow: none;
      }
    }
    .add-product{
      background: transparent;
      border: 2px dashed ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;

      div{
        display: flex;
        align-items: center;
        gap: .5rem;

        h3{
          font-weight: 600;
        }
      }
    }
  }    
`

export default function Aside() {
  return (
    <Container>

      <RecentUpdates />
      <div className="sales-analytics">

        <h2>Sales Analytics</h2>
        <div className="item online">
          <div className="icon">
            <span className='material-icons-sharp'>shopping_cart</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>ONLINE ORDERS</h3>
              <Small>last 24 Hours</Small>
            </div>
            <h5 className='success'>+39%</h5>
            <h3>3849</h3>
          </div>
        </div>

        <div className="item offline">
          <div className="icon">
            <span className='material-icons-sharp'>local_mall</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>OFFLINE ORDERS</h3>
              <Small>last 24 Hours</Small>
            </div>
            <h5 className='danger'>-17%</h5>
            <h3>1100</h3>
          </div>
        </div>

        <div className="item customers">
          <div className="icon">
            <span className='material-icons-sharp'>person</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>NEW CUSTOMERS</h3>
              <Small>last 24 Hours</Small>
            </div>
            <h5 className='success'>-39%</h5>
            <h3>3849</h3>
          </div>
        </div>

        <div className="item add-product">
          <div>
            <span className='material-icons-sharp'>add</span>
            <h3>Add Product</h3>
          </div>
        </div>

      </div>
    </Container>
  )
}