import styled from 'styled-components'

const Container = styled.div`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  padding:  ${({ theme }) => theme.cardPadding};
  border-radius : ${({ theme }) => theme.cardBorderRadius};
  margin-top: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 300ms ease;

  &:hover{
    box-shadow: none;
  }

  span{
    background: coral;
    padding: .5rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
  }

  .middle{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3{
    margin: 1rem 0 .6rem;    
  }

  .progress{
    position: relative;
    width: 92px;
    height: 92px;
    border-radius: 50%;
  }

  svg{    
    width: 7rem;
    height: 7rem;

    circle{
      fill: none;
      stroke: ${({ theme }) => theme.colors.primary};
      stroke-width: 14;
      stroke-linecap: round;
      transform: translate(5px,5px);
      stroke-dasharray: 110;
      stroke-dashoffset: 20;
    }
  }

  .number{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  small{
    margin-top: 1.6rem;
    display: block;
  }
`

export default function Card() {
  return (
    <Container>
      <div className="sales">
        <span className='material-icons-sharp'>analytics</span>
        <div className="middle">
          <div className="left">
            <h3>Total Sales</h3>
            <h1>R$ 25,00</h1>
          </div>
          <div className="progress">
            <svg>
              <circle cx={38} cy={38} r={36}></circle>
            </svg>
            <div className="number">
              <p>81%</p>
            </div>
          </div>
        </div>
        <small className='text-muted'>Last 24 Hours</small>
      </div>
    </Container>
  )
}