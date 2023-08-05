import React from 'react'
import FilterButton from '../FilterButton'

const Status = ({ setStatus, setPageNumber }) => {

    /*Array para guardar las opciones de status
    que son muerto , vivo o desconocido */

    let status = ['Alive','Dead','Unknown']

  return (
     /*Componente accordion de bootstrap copiar y pegar
    Luego ver que reemplazamos
    */
   /*
   Status tiene las opciones de
   alive
   dead
   Unknown
   */
    <div  className="accordion-item"> {/*Item 3 */}
    <h2  className="accordion-header">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div id="collapseThree" className= "accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className= "accordion-body d-flex flex-wrap gap-2"> {/*d-flex para que se pongan al lado del otro y flex wrap para q no se salga del ancho*/}
       {/*Aca va lo q se muestra al darle click al boton de
       alguna categoria*/}
       {
        status.map((items,index) => (
            //Array que contiene las opciones
         <FilterButton 
         tarea = {setStatus}
         setPageNumber = {setPageNumber}
         key={index}
         name = 'status'
         index = {index}
         items={items}
        

         /> //IMprimira un button por cada opcion

        ))
       }
       
      </div>
    </div>
     </div>
  )
}

export default Status