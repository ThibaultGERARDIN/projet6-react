import '../../styles/pages/Home.scss'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import cover from '../../assets/home-banner.png'
import Banner from '../../components/Banner'
import { useState, useEffect } from 'react'

let logements = require('../../logements.json')

function Home() {
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
    <div className="Home">
      <Banner cover={cover}>
        {isNarrowScreen ? (
          <h1>
            Chez vous,<br></br> partout et ailleurs
          </h1>
        ) : (
          <h1>Chez vous, partout et ailleurs</h1>
        )}
      </Banner>
      <div className="Home-cards">
        {logements.map(({ id, cover, title }) => (
          <div key={id}>
            <Link to={`/fiches-logements/${id}`}>
              <Card id={id} cover={cover} title={title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
