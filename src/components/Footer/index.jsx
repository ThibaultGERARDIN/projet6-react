import footerimg from '../../assets/footer.png'
import '../../styles/components/Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <img
        src={footerimg}
        alt="Kasa - copyright 2020 Kasa. All rights reserved"
      />
    </div>
  )
}

export default Footer
