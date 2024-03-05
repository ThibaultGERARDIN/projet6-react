import '../../styles/pages/Home.scss'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import cover from '../../assets/home-banner.png'
import Banner from '../../components/Banner'

let logements = require('../../logements.json')

function Home() {
  return (
    <div className="Home">
      <Banner cover={cover}>
        <h1>Chez vous, partout et ailleurs</h1>
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
