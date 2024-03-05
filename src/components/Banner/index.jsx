import '../../styles/components/Banner.scss'

function Banner(props) {
  return (
    <div
      className="Banner"
      style={{
        backgroundImage: `linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      url(${props.cover})`,
      }}
    >
      {props.children}
    </div>
  )
}

export default Banner
