import React from 'react'
import Gender from './categorias/Gender'
import Species from './categorias/Species'
import Status from './categorias/Status'

const Filter = ({ setStatus, setPageNumber , setGender, setSpecies}) => {

  const borrarFiltros = () => {
    setStatus('')
    setGender('')
    setSpecies('')
    setPageNumber('')
    window.location.reload(false); 
    //Para que cuando se toque el boton resetee la pagina y no quede algo checkeado
  }
  return (
    <div className='col-lg-3 col-12 mb-5'>
      {/*En lg (dispositivos grandes) ocupara 3 columnas
      pero en dispositvos puequeños, 12 que seria todo el ancho*/}
     <div className='text-center fw-bold fs-4 mb-2'>Filtrar</div>
     <div style={{cursor:'pointer'}} 
     className='text-center text-primary text-decoration-underline mb-4'
      onClick={borrarFiltros}
     >
     Borrar filtros
     </div>
    
     <div  className="accordion" id="accordionExample">
      {/*Aca debo importar las 3 categorias del filtrado*/}
      {/*Cada una es un acorddion item*/}
      <Gender setGender = {setGender} setPageNumber = {setPageNumber} />
      <Species setSpecies = {setSpecies} setPageNumber = {setPageNumber}  />
      <Status setPageNumber = {setPageNumber} setStatus = {setStatus} />
     
     
     </div>
    </div>
  )
}

export default Filter