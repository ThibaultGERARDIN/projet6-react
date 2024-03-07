import '../../styles/components/Rating.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="Rating">
      {range.map((rangeElem) =>
        rating >= rangeElem ? (
          <span key={rangeElem.toString()}>
            <FontAwesomeIcon icon={faStar} className="star-active" />
          </span>
        ) : (
          <span key={rangeElem.toString()}>
            <FontAwesomeIcon icon={faStar} className="star-inactive" />
          </span>
        ),
      )}
    </div>
  )
}

export default Rating
