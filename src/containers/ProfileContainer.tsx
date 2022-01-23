import styled from 'styled-components'
import ProfilePhoto from '../components/ProfilePhoto'
import Small from '../components/Small'

const Container = styled.div`
    margin-top: 1.4rem;

    .top{
    display: flex;
    justify-content: end;
    gap: 2rem;
    
    .profile{
      display: flex;
      gap: 2rem;
      text-align: right;
    }

    button{
      display: none;
    }

    .theme-toggler{
    background: ${({ theme }) => theme.colors.light};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    width: 4.2rem;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius1};

    span{
      font-size: 1.2rem;
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &.active{
        background: ${({ theme }) => theme.colors.primary};
        color: white;
        border-radius: ${({ theme }) => theme.borderRadius1};
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .right{
      margin-top: 8rem;
      padding: 0 1rem; 
      
      .top{
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        padding: 0 .8rem;
        height: 4.6rem;
        background:${({ theme }) => theme.colors.white};
        width: 100%;
        margin: 0;
        z-index: 2;
        box-shadow: 0 1rem 1rem ${({ theme }) => theme.colors.light};
      }
     }    
  }
`

export default function ProfileContainer() {
  return (
    <Container>
      <div className="top">
        <button id="menu-btn">
          <span className='material-icons-sharp'>menu</span>
        </button>
        <div className="theme-toggler">
          <span className='material-icons-sharp active'>light_mode</span>
          <span className='material-icons-sharp '>dark_mode</span>
        </div>
        <div className="profile">
          <div className="info">
            <p>Olá, <b>Pablo</b></p>
            <Small>Admin</Small>
          </div>
          <ProfilePhoto />
        </div>
      </div>
    </Container>
  )
}