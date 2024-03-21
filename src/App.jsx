import { useState, useEffect } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'

const App = () => {
  const [amiibos, setAmiibos] = useState([])

  const getAmiibos = async () => {
    try {
      const respuesta = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await respuesta.json()
      setAmiibos(data.amiibo)
    } catch (error) {
      console.error('Error fetching amiibos:', error)
    }
  }

  useEffect(() => {
    getAmiibos()
  }, [])

  console.log(amiibos)
  return (
    <>
      <div>
        <Header />
        <h1>App</h1>
        {/* <ul>
          {amiibos?.map((amiibo) => (
            <li key={amiibo.tail}> {amiibo.name} - {amiibo.amiiboSeries} </li>
          ))}
        </ul> */}
      </div>
      <Footer />
    </>
  )
}

export default App
