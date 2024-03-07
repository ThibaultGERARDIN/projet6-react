import '../../styles/pages/Fiche.scss'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import { useParams } from 'react-router-dom'
let logements = require('../../logements.json')

function Fiche() {
  const logementId = useParams().logementId
  return (
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
          logementId === id ? (
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
                <Collapse size="medium" title="Description">
                  {description}
                </Collapse>
                <Collapse size="medium" title="Équipements">
                  <ul>
                    {equipments.map((equipement, index) => (
                      <li key={index}>{equipement}</li>
                    ))}
                  </ul>
                </Collapse>
              </div>
            </div>
          ) : null,
      )}
    </div>
  )
}

export default Fiche
