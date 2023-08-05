import React from 'react'
import FilterButton from '../FilterButton';

const Gender = ({setGender,setPageNumber}) => {

  /*Array que contengan las opciones de gender */
  let genders = ['female', 'male', 'genderless','unknown'];

  return (
    /*Componente accordion de bootstrap copiar y pegar
    Luego ver que reemplazamos
    */
   /*
   Gender tiene 4 opciones 
   female
   male
   desconocido 
   travesti
   */
    <div  className="accordion-item"> {/*Item 1*/}
    <h2  className="accordion-header">
      <button  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Gender
      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div  className="accordion-body d-flex flex-wrap gap-2">
       {/*Aca iran las opciones para elegir*/}
       {
        genders.map((items,index) => (
          /*Por cada gender quiero mostrar el componente filter button*/
          <FilterButton 
          tarea = {setGender}
          setPageNumber={setPageNumber}
          key={index}
          name='gender'
          index={index}
          items={items}

          />

        ))
       }
      </div>
    </div>
     </div>
  )
}

export default Gender