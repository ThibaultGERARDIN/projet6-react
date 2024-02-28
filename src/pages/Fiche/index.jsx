import '../../styles/pages/Fiche.scss'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'

function Fiche() {
  return (
    <div>
      <Banner />
      <div>Ensemble des infos (nom etc)</div>
      <Dropdown />
      <Dropdown />
    </div>
  )
}

export default Fiche
