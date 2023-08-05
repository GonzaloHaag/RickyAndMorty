
import './App.css';

/*Instalación bootstrap*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from 'react';
import Card from './componentes/cardPersonaje/Card';
import Search from './componentes/search/Search';
import Paginacion from './componentes/paginacion/Paginacion';
import Filter from './componentes/filtrado/Filter';




function App() {
  const [data,setData] = useState([]); //que arranque un array vacio,no null
  
  let {info,results} = data; //Obtengo el data.info y el data.results(array que debo utilizar en card)

  const [pageNumber,setPageNumber] = useState(1); //Para saber que pagina estoy 

  const [search,setSearch] = useState(''); //Acá se guardará el valor de lo que se escribe en el input

  //Para el filtrado creo una variable que al principio este vacia
  const [gender,setGender] = useState('');
  const [species,setSpecies] = useState('');
  const [status,setStatus] = useState('');

  //Si a status le doy el valor de dead, mostrar lo que estan dead



  //Ahora en la api debo reemplazar por lo que tengo en estas dos variables
  //url que me da la api ttps://rickandmortyapi.com/api/character/?name=rick&status=alive ; //
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${gender}&species=${species}&status=${status}`; 
  /*a la api le concatenamos lo que esta escrito en el input y el numero de pagina, para saber que hay que mostrar,
  Lo mismo con species gender y status --> Clave, esto es lo que tendremos que filtrar
  */
  //Por default mostrará solo los datos de la api --> Clave, porque hasta q no pongamos nada mostrará todo igual, no depende necesariamente de eso

  

useEffect(() => {
  fetch(api)
  .then((response) => response.json())
  .then((data) => setData(data)) //Se lo asignamos a data

 },[api]); //Cada vez que la api cambie quiero realizar esta peticion

  return (
    <div className="App">
      <h1 className='text-center mb-3 mt-5'>Personajes</h1>
      <Search setSearch = {setSearch} setPageNumber = {setPageNumber} /> 
      {/*A search le mando los set para actualizar los datos*/}
      <div className='container'>
        <div className='row'>
          <Filter 
          setStatus = {setStatus} 
          setPageNumber = {setPageNumber}
          setGender = {setGender}
          setSpecies = {setSpecies}

          />
          <div className='col-lg-8 col-12'>
           <div className='row'>
            {/* Componente de la card de los personajes */}
            <Card resultadoApi = {results} /> {/*Le mando el data.results,Se lo mando  para que la card recorra y muestre los datos*/}
           </div>
          </div>
        </div>
        <Paginacion 
        pageNumber = {pageNumber} 
        setPageNumber = {setPageNumber} 
        infoPage = {info} />
        {/*A mi componente la mando la data.info que tiene la informacion de las pages*/}
      </div>
    </div>
  );
}

export default App;
