import { Link } from 'react-router-dom'
import '../../styles/pages/Error.scss'
import errorimg from '../../assets/404.png'
import { useState, useEffect } from 'react'

function Error() {
  // vérifie si l'écran est <768 px (pour ajouter un passage de ligne dans le titre pour coller à la maquette)
  const [isNarrowScreen, setIsNarrowScreen] = useState(false)
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 768px)')
    setIsNarrowScreen(mobile.matches)
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches)
    }
    mobile.addEventListener('change', updateIsNarrowScreen)
  }, [])
  return (
    <div className="Error">
      <img src={errorimg} alt="Erreur 404" className="error-img" />
      <span className="error-title">
        {isNarrowScreen ? (
          <h2>
            Oups ! La page que <br></br> vous demandez n'existe pas.
          </h2>
        ) : (
          <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        )}
      </span>

      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error
