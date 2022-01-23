import styled from 'styled-components'
import ProfilePhoto from './ProfilePhoto'
import Small from './Small'

const Container = styled.div`
  margin-top: 1.4rem;

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
  }
  .recent-updates{
    margin-top: 1rem;

    h2{
      margin-bottom: .8rem;
    }

    .updates{
      background: ${({ theme }) => theme.colors.white};
      padding: ${({ theme }) => theme.cardPadding};
      border-radius: ${({ theme }) => theme.cardBorderRadius};
      box-shadow: ${({ theme }) => theme.boxShadow};
      transition: all 300ms ease;

      &:hover{
        box-shadow: none;
      }

      .update{
        display: grid;
        grid-template-columns: 2.5rem auto;
        gap: 1rem;
        margin-bottom: 1rem;
      }
    }
  }
`

export default function Aside() {
  return (
    <Container>

      <div className="top">
        <button id="menu-btn">
          <span className='material-icons-sharp'>menu</span>
        </button>
        <div className="theme-toggler">
          <span className='material-icons-sharp active'>light_mode</span>
          <span className='material-icons-sharp'>dark_mode</span>
        </div>
        <div className="profile">
          <div className="info">
            <p>Olá, <b>Pablo</b></p>
            <Small>Admin</Small>
          </div>
          <ProfilePhoto />
        </div>
      </div>

      <div className="recent-updates">
        <h2>Recent Updates</h2>
        <div className="updates">
          <div className="update">
            <ProfilePhoto />
            <div className="message">
              <p><b>Mike Tyson</b>received his order of Night Lion tech GPS drone.</p>
              <Small>2 Minutes Ago</Small>
            </div>
          </div>
          <div className="update">
            <ProfilePhoto />
            <div className="message">
              <p><b>Mike Tyson</b>received his order of Night Lion tech GPS drone.</p>
              <Small>2 Minutes Ago</Small>
            </div>
          </div>
          <div className="update">
            <ProfilePhoto />
            <div className="message">
              <p><b>Mike Tyson</b>received his order of Night Lion tech GPS drone.</p>
              <Small>2 Minutes Ago</Small>
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}