import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;

  .top{
    /*background: white;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;
  }

  .logo {
    display: flex;
    gap: .8rem;

    img{
     width: 2rem;
     height: 2rem;
    }
  }
  
  .close{
    display: none;
  }

  .sidebar{
   /* background: white;*/
    display: flex;
    flex-direction: column;
    height: 86vh;
    position: relative;
    top: 3rem;

    a{
      display: flex;
      color: ${({ theme }) => theme.colors.infoDark};
      margin-left: 2rem;
      gap: 1rem;
      align-items: center;
      position: relative;
      height: 3.7rem;
      transition: all 300ms ease;

      &:hover{
          color: ${({ theme }) => theme.colors.primary};

          span{
            margin-left: 1rem;
          }
        }

      &.active{
        background: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.primary};
        margin-left: 0;

        span{
          /*color: ${({ theme }) => theme.colors.primary};*/
          margin-left: calc(1rem - 3px);
        }       

        &:before{
          content: '';
          width: 6px;
          height: 100%;
          background: ${({ theme }) => theme.colors.primary};
        }
      }

      &:last-child{
        position: absolute;
        bottom: 2rem;
        width: 100%;
      }

      span{
        font-size: 1.6rem;
        transition: all 300ms ease;
      }
    }

    .message-count{
      background: ${({ theme }) => theme.colors.danger};
      color:  ${({ theme }) => theme.colors.white};
      padding: 2px 10px;
      font-size: 11px;
      border-radius: ${({ theme }) => theme.borderRadius1};
    }
  }

  h3{
    font-weight: 500;
  }
`

export default function Aside() {
  return (
    <Container>
      <div className="top">
        <div className="logo">
          <img src="brand-logo.jpg" alt="" />
          <h2>ZIONIX</h2>
        </div>

        <div className="close">
          <span className='material-icons-sharp'>close</span>
        </div>
      </div>

      <div className="sidebar">
        <a href="#">
          <span className='material-icons-sharp'>grid_view</span>
          <h3>Dashboard</h3>
        </a>
        <a href="#" className='active'>
          <span className='material-icons-sharp'>person_outline</span>
          <h3>Customers</h3>
        </a>
        <a href="#">
          <span className='material-icons-sharp'>receipt_long</span>
          <h3>Orders</h3>
        </a>
        <a href="#">
          <span className='material-icons-sharp'>insights</span>
          <h3>Analytics</h3>
        </a>
        <a href="#">
          <span className='material-icons-sharp'>mail_outline</span>
          <h3>Messages</h3>
          <span className='message-count'>26</span>
        </a>
        <a href="#">
          <span className='material-icons-sharp'>inventory</span>
          <h3>Products</h3>
        </a>
        <a href="#">
          <span className='material-icons-sharp'>report_gmailerrorred</span>
          <h3>Reports</h3>
        </a>
        <a href="#">
          <span className='material-icons-sharp'>settings</span>
          <h3>Settings</h3>
        </a>
        <a href="#">
          <span className='material-icons-sharp'>add</span>
          <h3>Add Product</h3>
        </a>
        <a href="#">
          <span className='material-icons-sharp'>logout</span>
          <h3>Logout</h3>
        </a>
      </div>
    </Container>
  )
}