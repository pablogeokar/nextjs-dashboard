import styled from 'styled-components'
import ProfilePhoto from '../components/ProfilePhoto'
import Small from '../components/Small'

const Container = styled.div`
 
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
`

export default function RecentUpdates() {
  return (
    <Container>
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
    </Container>
  )
}