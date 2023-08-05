import React from 'react';
import styles from './search.module.scss';

const Search = ({setSearch,setPageNumber}) => {
    //Recibo props que me manda app
    const envioFormulario = (e) => {
        e.preventDefault();
    }
  return (
    <form
    className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
  >
    <input
    onChange={(e) => {
        //onChange para que lo tome cada vez que escribo
        setPageNumber(1);
        setSearch(e.target.value) //Para darle valor al search que tengo en app, le mando el value cada vez que escribo algo
        //Esto es clave porque modifico el valor del search aca y lo recibe app tambien
    }}
    placeholder='Buscar personajes'
    type='text'
    className={styles.input}

    />
    <button onClick={envioFormulario} className={`${styles.btn} btn btn-primary fs-5`}>
        Buscar
    </button>
  
    </form>
  )
}

export default Search