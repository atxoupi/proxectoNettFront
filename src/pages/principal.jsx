import React, { useEffect, useState } from 'react';
import '../css/Principal.css';
import axios from 'axios';



export const Principal = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        axios.get('https://techy-api.vercel.app/api/json').then((response) => {
            setQuote(response.data.message);
    })
}, [])
    
    return (
        <>
            <header className='title'>
            <h1>Bienvenida a Cris Núñez </h1>
            <h2>Te acompaño en el CAMINO del Aprendizaje y el Bienestar</h2>
            </header>
            <div className='contenedor'>
                <main className='principalBody'>
                <article id='presentation'>¡Hola! Soy Cris Núñez, y estoy aquí para acompañarte en tu viaje de aprendizaje y desarrollo personal, así como para brindar apoyo a padres que desean ayudar a sus hijos en este camino. ¿Eres una persona que busca fortalecer tu bienestar o un padre que desea apoyar el crecimiento de sus hijos? ¡Has llegado al lugar correcto!<br /><br />
                El aprendizaje es un viaje continuo, y a veces todos necesitamos un poco de orientación. Ofrezco servicios de acompañamiento en el estudio para personas de todas las edades, creando un ambiente donde puedes explorar tus habilidades, encontrar tu propio ritmo y desarrollar estrategias efectivas de aprendizaje. Además, brindo apoyo a padres que desean comprender mejor las necesidades educativas de sus hijos y aprender estrategias para apoyar su desarrollo académico.
                </article>
                <img id='img_principal' src="src/img/Sobre mí.jpg" alt="Imagen de Cristina sonriendo a cámara" />
                </main>
                <aside id='quote'>
                    <h3>Quote Generator</h3>
                    <p>{quote}</p>
                </aside>
            </div>
            
            <footer className='footer'>
                <p>&copy; 2022 Cris Núñez. All rights reserved.</p>
            </footer>

        </>
    )
}
