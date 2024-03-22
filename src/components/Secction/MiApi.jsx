import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const MiApi = () => {
  const [amiibos, setAmiibos] = useState([])

  const getAmiibos = async () => {
    try {
      const respuesta = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await respuesta.json()
      // Limitando el listado de Amiibos
      // const dataAmiibos = data.amiibo.slice(0, 20)
      const dataAmiibos = data.amiibo
      // Ordenando los datos por Orden alfabetico
      const ordenandoAmiibos = dataAmiibos.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
      setAmiibos(ordenandoAmiibos)
    } catch (error) {
      console.error('Error fetching amiibos:', error)
    }
  }

  useEffect(() => {
    getAmiibos()
  }, [])

  return (
    <>
      {/*   <div className='container'>
        <ul>
          {amiibos?.map((amiibo) => (
            <li key={amiibo.tail}> {amiibo.name} - {amiibo.amiiboSeries} </li>
          ))}
        </ul>
      </div> */}
      <div className='container p-3 '>
        <h1 className='text-center'>Lista de Amiibos</h1>
        <Row xs={1} md={4} className='g-4'>
          {amiibos?.map((amiibo) => (
            <Col key={amiibo.id}>
              <Card>
                <Card.Img variant='top' src={amiibo.image} className='card-img' />
                <Card.Body>
                  <Card.Title className='text-center'>{amiibo.name}</Card.Title>
                  <Card.Text className='text-center'>
                    <p> Juego : {amiibo.gameSeries}</p>
                    <p> Tipo Amiibo: {amiibo.type}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default MiApi
