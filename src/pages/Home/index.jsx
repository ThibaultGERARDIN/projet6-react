import '../../styles/pages/Home.scss'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'

let logements = require('../../logements.json')

function Home() {
  return (
    <div className="Home">
      <div className="Home-banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
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
