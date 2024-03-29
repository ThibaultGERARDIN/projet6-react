import '../../styles/components/Collapse.scss'
import { useRef, useState } from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Collapse(props) {
  const [open, setOPen] = useState(false)
  const contentRef = useRef()
  const toggle = () => {
    setOPen(!open)
  }
  return (
    <div>
      <button onClick={toggle} className={'collapse collapse-button'}>
        {props.title}
        {!open ? (
          <FontAwesomeIcon icon={faChevronUp} className="chevron-close" />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} className="chevron-open" />
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
        <div className={'collapse content'}>{props.children}</div>
      </div>
    </div>
  )
}

export default Collapse
