import React from 'react';


export const Services = () => {
    return (
        <>
        <picture className='d-flex justify-content-center w-75 m-auto mt-5'>
            <source media="(min-width: 768px)" srcSet="src/img/services.jpeg" />
            <source media="(min-width: 320px)" srcSet="src/img/services.jpeg" />
            <img id='img_principal' src="src/img/services.jpeg" alt="Imagen de Cristina sonriendo a cámara" />
        </picture>
        </>
    )
}