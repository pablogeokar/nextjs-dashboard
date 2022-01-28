
import { Container } from './styles'
import options from '../../config/menu'
import { useState } from 'react'

export default function Menu() {
  const [active, setActive] = useState(0)

  function handleClick(activeIndexMenu: number) {
    setActive(activeIndexMenu)
  }

  return (
    <Container id='menu'>
      <div className="top">
        <div className="logo">
          <img src="brand-logo.jpg" alt="" />
          <h2>ZIONIX</h2>
        </div>

        <div className="close" id="close-btn">
          <span className='material-icons-sharp'>close</span>
        </div>
      </div>

      <div className="sidebar">
        {
          options.map((i, index) => {
            return (
              <a
                href={i.link}
                key={index}
                className={active === index ? 'active' : ''}
                onClick={() => handleClick(index)}>
                <span className='material-icons-sharp'>{i.icon}</span>
                <h3>{i.label}</h3>
                {i.badge && <span className='message-count'>{i.badge}</span>}
              </a>
            )
          })
        }
      </div>
    </Container>
  )
}