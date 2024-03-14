import '../../styles/pages/Fiche.scss'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import { useParams, Navigate } from 'react-router-dom'
let logements = require('../../logements.json')

function Fiche() {
  const { logementId } = useParams()
  const currentLogement = logements.find(({ id }) => id === logementId)

  return currentLogement ? (
    <div>
      <div className="fiche" key={currentLogement.id}>
        <Carousel data={currentLogement.pictures} />

        <div className="info">
          <div className="info-left">
            <div className="info-left-txt">
              <h2>{currentLogement.title}</h2>
              <span>{currentLogement.location}</span>
            </div>

            <Tag tags={currentLogement.tags} />
          </div>
          <div className="info-right">
            <div className="host">
              <p className="host-name">{currentLogement.host.name}</p>
              <img
                src={currentLogement.host.picture}
                alt="Votre hôte"
                className="host-img"
              />
            </div>
            <div className="rating">
              <Rating rating={currentLogement.rating} />
            </div>
          </div>
        </div>
        <div className="fiche-collapse">
          <span className="span-collapse">
            <Collapse className="collapse" title="Description">
              {currentLogement.description}
            </Collapse>
          </span>
          <span className="span-collapse">
            <Collapse className="collapse" title="Équipements">
              <ul>
                {currentLogement.equipments.map((equipement, index) => (
                  <li key={index}>{equipement}</li>
                ))}
              </ul>
            </Collapse>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/erreur404" replace={true} />
  )
}

export default Fiche
