import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/components/Header.scss'

function Header() {
  const location = useLocation()
  const currentLocation = location.pathname
  return (
    <div className="Header">
      <img src={logo} alt="Logo Kasa" className="header-logo" />
      <nav>
        <Link to="/" className={currentLocation === '/' ? 'highlight' : ''}>
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={currentLocation === '/a-propos' ? 'highlight' : ''}
        >
          A propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
