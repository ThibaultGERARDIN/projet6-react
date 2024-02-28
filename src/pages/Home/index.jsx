import '../../styles/pages/Home.scss'
import Card from '../../components/Card'

function Home() {
  return (
    <div className="Home">
      <div className="Home-banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
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
