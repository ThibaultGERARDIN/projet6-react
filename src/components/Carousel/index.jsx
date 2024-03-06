import '../../styles/components/Carousel.scss'
import { useState } from 'react'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Carousel({ data }) {
  const [slide, setSlide] = useState(0)
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <div className="Carousel">
      <FontAwesomeIcon
        className="arrow arrow-left"
        icon={faChevronLeft}
        onClick={prevSlide}
      />

      {data.map((item, index) => {
        return (
          <img
            src={item}
            alt="Photos de l'appartement"
            key={index}
            className={slide === index ? 'slide' : 'slide slide-hidden'}
          />
        )
      })}
      <FontAwesomeIcon
        className="arrow arrow-right"
        icon={faChevronRight}
        onClick={nextSlide}
      />
      {data.map((_, index) => {
        return (
          <span
            className={slide === index ? 'slide-number' : 'slide slide-hidden'}
            key={index}
          >
            {`${index + 1}/${data.length}`}
          </span>
        )
      })}
    </div>
  )
}

export default Carousel
