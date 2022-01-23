import styled from 'styled-components'
import ProfilePhoto from './ProfilePhoto'
import Small from './Small'

const Container = styled.div`
background-color: red;
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
`

export default function Top() {
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