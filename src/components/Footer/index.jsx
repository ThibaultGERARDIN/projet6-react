import footerimg from '../../assets/footer.png'
import footerimgMobile from '../../assets/footer-mobile.png'

import '../../styles/components/Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <img
        src={footerimg}
        srcSet={`${footerimgMobile} 768w, ${footerimg} 1280w`}
        sizes="(max-width: 768px) 768px, 1280px"
        alt="Kasa - copyright 2020 Kasa. All rights reserved"
      />
    </div>
  )
}

export default Footer
