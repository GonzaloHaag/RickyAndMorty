import React from 'react';
import styles from './Card.module.scss';

const Card = ( { resultadoApi }) => {
    //Recibo la prop que me manda app.js
    console.log(resultadoApi); //Aca llegan los datos, del data.results

  return (
   
   <>
     {
        resultadoApi != null ? //Si viene algo, quiero hacerle un map 
        resultadoApi.map((infoPersonaje) => (
            <div key={infoPersonaje.id} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"> {/*Div contenedor de la card*/}

            <div className={`${styles.card} d-flex flex-column justify-content-center`}>

            <img className={`${styles.img} img-fluid`} src={infoPersonaje.image} alt='ImagenPersonaje' />
            <div className={styles.content}>
            <div className="fs-5 fw-bold mb-4"> {infoPersonaje.name} </div>
            <div className=''>
            <div className="fs-6 fw-normal">Last Location</div>
            <div className="fs-5">{infoPersonaje.location.name}</div>
            </div>
            </div>
            {
                infoPersonaje.status === 'Dead' && <div className={`${styles.badge} position-absolute badge bg-danger`}>
                    {/*Mostraremos una tarjeta de si esta vivo, muerto o se desconoce el estado del personaje*/}
                   {infoPersonaje.status}
               </div>
               
            }
            {/*ESTOY HACIENDO ESTO PARA MOSTRAR DISTINTOS COLORES DE ACUERDO A SI ESTA VIVO MUERTO O SE DESCONOCE*/}
              {
                infoPersonaje.status === 'Alive' && <div className={`${styles.badge} position-absolute badge bg-success`}>
                    {/*Mostraremos una tarjeta de si esta vivo, muerto o se desconoce el estado del personaje*/}
                   {infoPersonaje.status}
               </div>
               
            }
              {
                infoPersonaje.status === 'unknown' && <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                    {/*Mostraremos una tarjeta de si esta vivo, muerto o se desconoce el estado del personaje*/}
                   {infoPersonaje.status}
               </div>
               
            }
            </div> {/*Cierre div de card*/}
            </div>
            
        ))

        :
      
        <div className='d-flex mt-2 justify-content-center'>
          <h4>Personaje no encontrado</h4>

        </div>
       
     }
     </>
    
  )
}

export default Card