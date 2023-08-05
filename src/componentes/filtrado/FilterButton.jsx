import React from 'react'

const FilterButton = ({name,index,items,tarea,setPageNumber}) => {
    //Recibo props que manda status,gender y species
    /*
    La prop de tarea viene de status
    tarea ={setStatus}
    */
  return (
    /*Componente radio de bootstrap */
    <div>
      <style jsx>
        {
          `
          .x:checked + label{
            background-color:#0b5ed7;
            color:white

          }
          input[type="radio"] {
            display:none
          }
          `
        }

      </style>
    <div className="form-check">
      <input
       onClick={() => {
        setPageNumber(1);
        tarea(items); //Aca cada categoria me manda sus items para saber cual es
       }}
       className="form-check-input x" 
       type="radio" 
       name={name} 
       id={`${name} - ${index}`}
       //id = status - 1, id = status - 2, id = status-3
       />
  <label className="btn btn-outline-primary" for={`${name} - ${index}`}>
    {/*En el for va el ID del input --> Ojo */}
    {/*POngo los items q mandan */}
   {items} {/*Aca me esta llegando alive,dead y uknown
   de parte de status, y los muestro
   Tambien me llega lo de species y lo de gender, es muy clave
   */} 
  </label>
</div>
</div>
  )
}

export default FilterButton