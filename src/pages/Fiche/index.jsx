import '../../styles/pages/Fiche.scss'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import { useParams, Navigate } from 'react-router-dom'
let logements = require('../../logements.json')

function Fiche() {
  const currentLogementId = useParams().logementId
  const allId = logements.map(({ id }) => id)

  return allId.includes(currentLogementId) ? (
    <div>
      {logements.map(
        ({
          id,
          pictures,
          title,
          description,
          tags,
          host,
          location,
          equipments,
          rating,
        }) =>
          currentLogementId === id ? (
            <div className="fiche" key={id}>
              <Carousel data={pictures} />

              <div className="info">
                <div className="info-left">
                  <div className="info-left-txt">
                    <h2>{title}</h2>
                    <span>{location}</span>
                  </div>

                  <Tag tags={tags} />
                </div>
                <div className="info-right">
                  <div className="host">
                    <p className="host-name">{host.name}</p>
                    <img
                      src={host.picture}
                      alt="Votre hôte"
                      className="host-img"
                    />
                  </div>
                  <div className="rating">
                    <Rating rating={rating} />
                  </div>
                </div>
              </div>
              <div className="fiche-collapse">
                <span className="span-collapse">
                  <Collapse className="collapse" title="Description">
                    {description}
                  </Collapse>
                </span>
                <span className="span-collapse">
                  <Collapse className="collapse" title="Équipements">
                    <ul>
                      {equipments.map((equipement, index) => (
                        <li key={index}>{equipement}</li>
                      ))}
                    </ul>
                  </Collapse>
                </span>
              </div>
            </div>
          ) : null,
      )}
    </div>
  ) : (
    <Navigate to="/erreur404" replace={true} />
  )
}

export default Fiche
