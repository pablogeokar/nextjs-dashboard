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
  @media screen and (max-width: 1200px){ 
    .logo h2{
      display: none;
    }
    .sidebar h3{
      display: none;
    }
    .sidebar a{
      width: 5.6rem;

      &:last-child{
        position: relative;
        margin-top: 1.8rem;
      }
    }
  }
  @media screen and (max-width: 768px){
    position: fixed;
    left: 0;
    background: ${({ theme }) => theme.colors.white};
    width: 18rem;
    z-index: 3;
    box-shadow: 1rem 3rem 4rem ${({ theme }) => theme.colors.light};
    height: 100vh;
    padding-right:${({ theme }) => theme.cardPadding};
    display: none;

    .logo{
      margin-left: 1rem;
      h2{
        display: inline;
      }
    }
    .sidebar {
      h3{
      display: inline;
      }
      a{
        width: 100%;
        height: 3.4rem;

        &:last-child{
          position: absolute;
          bottom: 5rem;
        }
      }
    } 
    .close{
      display: inline-block;
      cursor: pointer;
    }   
  }
`

export default function Menu() {
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