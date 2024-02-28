import '../../styles/pages/Home.scss'
import Card from '../../components/Card'

function Home() {
  return (
    <div className="Home">
      <div className="Home-banner">Chez vous, partout et ailleurs</div>
      <div className="Home-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
