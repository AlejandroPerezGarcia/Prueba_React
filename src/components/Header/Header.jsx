import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <Navbar className='bg-body-tertiary container'>
      <Container className='titulo'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src='./src/assets/img/logo_amiibos.png'
            width='35'
            height='35'
            className='d-inline-block align-top'
          />
          Amiibos
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default Header
