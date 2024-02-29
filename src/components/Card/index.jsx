import '../../styles/components/Card.scss'

function Card(props) {
  return (
    <div
      key={props.id}
      className="Card"
      style={{
        backgroundImage: `linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(10, 10, 10, 0) 42%,
        rgba(4, 4, 4, 0.5) 99.99%,
        rgba(0, 0, 0, 1) 100%
      ), url(${props.cover})`,
      }}
    >
      <h3>{props.title}</h3>
    </div>
  )
}

export default Card
