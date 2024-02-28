import { Link } from 'react-router-dom'
import '../../styles/components/Header.scss'


function Header() {
  return (
    <div>
      <Link to="/">Accueil</Link>
      <Link to="/fiches-logements/:nomLogement">Fiches logements</Link>
      <Link to="/a-propos">A propos</Link>
    </div>
  )
}

export default Header
