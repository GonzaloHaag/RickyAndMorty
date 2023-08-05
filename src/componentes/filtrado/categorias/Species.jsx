import React from 'react'
import FilterButton from '../FilterButton';

const Species = ( { setPageNumber, setSpecies }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
     /*Componente accordion de bootstrap copiar y pegar
    Luego ver que reemplazamos
    */
   /*
   Species tiene las opciones de :
   Human alien humanoid uknown animal 
   robot planet....
   */
    <div className="accordion-item"> {/*Item 2*/}
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-2">
        {/*Aca va lo que quiero mostrar en el despegable*/}
        {
          species.map((items,index) => (
            <FilterButton
            tarea = {setSpecies}
            setPageNumber={setPageNumber}
            key={index}
            name='species'
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

export default Species