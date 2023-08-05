import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Paginacion = ({pageNumber,setPageNumber,infoPage}) => {
    //Recibo props que manda app

    const cambioDePagina = (data) => {
     setPageNumber(data.selected + 1); //Esto se asigna a pageNumber, entonces la api ya sabe que pagina buscar
     window.scrollTo(0,0)
     //Maneja el cambio de pagina
    }
    //Codigo para que la paginacion sea responsive 
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
      setWidth(window.innerWidth);
    };

    
   
   
   useEffect(() => {
  window.addEventListener("resize", updateDimensions);
  return () => window.removeEventListener("resize", updateDimensions);
}, []);

  return (
    <>
<style jsx>
{`
  a {
    color: white; text-decoration: none;
  }
  @media (max-width: 768px) {
    .pagination {font-size: 12px}

    .next,
    .prev {display: none}
  }
  @media (max-width: 768px) {
    .pagination {font-size: 14px}
  }
`}
</style>

    {/*Estilos y propiedades que recibe react-paginate*/}
    <ReactPaginate
    className="pagination justify-content-center my-4 gap-4"
    nextLabel="Next"
    previousLabel="Prev"
    previousClassName="btn btn-primary fs-5 prev"
    nextClassName="btn btn-primary fs-5 next"
    activeClassName="active"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1} //Si es la 1 que baje a 0, sino 1 menos
    marginPagesDisplayed={width < 576 ? 1 : 2}
    pageRangeDisplayed={width < 576 ? 1 : 2}
    pageCount={infoPage?.pages}
    onPageChange={cambioDePagina}
    //.... other props here
  />
  </>
  )
}

export default Paginacion