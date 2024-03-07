import '../../styles/components/Collapse.scss'
import { useRef, useState, useEffect } from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Collapse(props) {
  const [open, setOPen] = useState(false)
  const contentRef = useRef()
  const toggle = () => {
    setOPen(!open)
  }
  // vérifie si l'écran est <768 px (pour ajouter un passage de ligne dans le titre pour coller à la maquette)
  const [isNarrowScreen, setIsNarrowScreen] = useState(false)
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 620px)')
    setIsNarrowScreen(mobile.matches)
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches)
    }
    mobile.addEventListener('change', updateIsNarrowScreen)
  })

  return (
    <div>
      <button
        onClick={toggle}
        className={isNarrowScreen ? 'Collapse small' : `Collapse ${props.size}`}
      >
        {props.title}
        {!open ? (
          <FontAwesomeIcon icon={faChevronUp} className="chevron-open" />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} className="chevron-close" />
        )}
      </button>
      <div
        className="content-parent"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
      >
        <div
          className={
            isNarrowScreen
              ? 'content content-small'
              : `content content-${props.size}`
          }
        >
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Collapse
