export const getAmiibos = async () => {
  try {
    const respuesta = await fetch('https://www.amiiboapi.com/api/amiibo/')
    const data = await respuesta.json()
    return data.amiibo
  } catch (error) {
    console.error('Error fetching amiibos:', error)
    return []
  }
}
