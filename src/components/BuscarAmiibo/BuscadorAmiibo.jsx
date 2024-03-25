import React, { useState } from 'react'

const BuscadorAmiibo = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Buscar tu Amiibo o juego'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default BuscadorAmiibo
