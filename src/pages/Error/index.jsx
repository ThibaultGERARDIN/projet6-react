import { Link } from 'react-router-dom'
import '../../styles/pages/Error.scss'
import errorimg from '../../assets/404.png'

function Error() {
  return (
    <div className="Error">
      <img src={errorimg} alt="Erreur 404" className="error-img" />
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error
