import { FaFacebookSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { CiInstagram, CiLinkedin } from 'react-icons/ci'

const Footer = () => {
  return (
    <>
      <footer className='container text-center'>
        <div className='padre'>
          <div className='iconos'>
            <a href='https://www.facebook.com/'><FaFacebookSquare size={40} /></a>
            <a href='https://twitter.com/'><FaSquareXTwitter size={40} /></a>
            <a href='https://www.linkedin.com/'><CiLinkedin size={40} /></a>
            <a href='https://www.instagram.com/'><CiInstagram size={40} /></a>
          </div>
          <div>
            <p>@2024 Alejandro Pérez García | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
