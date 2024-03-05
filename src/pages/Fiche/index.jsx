import '../../styles/pages/Fiche.scss'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'

function Fiche() {
  return (
    <div>
      <Carousel />
      <div>Ensemble des infos (nom etc)</div>
      <Collapse />
      <Collapse />
    </div>
  )
}

export default Fiche
