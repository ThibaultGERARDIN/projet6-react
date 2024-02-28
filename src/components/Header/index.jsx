import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/components/Header.scss'

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Logo Kasa" className="header-logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
      </nav>
    </div>
  )
}

export default Header
