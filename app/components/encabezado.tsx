"use client"

import Image from 'next/image';
import Logo from '../../public/images/logo_prologix_bg_void.png';
import { FaCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const texto_instrucciones = `
A continuación encontrará una serie de preguntas relacionadas con la operación, sistemas, datos, seguridad e innovación de su empresa.
Por favor seleccione la opción que mejor describa la situación actual de su organización utilizando la escala del 1 al 5:

1 = No existe / Muy deficiente
2 = Muy limitado
3 = Funciona parcialmente
4 = Funciona bien
5 = Funciona de forma óptima

La encuesta toma aproximadamente 5 a 7 minutos y sus respuestas serán utilizadas únicamente para elaborar un diagnóstico ejecutivo y recomendaciones tecnológicas para su empresa.
`

export default function Encabezado () {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
            delay: 0
        })
    }, [])

    return (
        <>
            <div className='flex flex-col justify-items-center items-start h-auto w-full'>
                <div className='flex flex-cols justify-between items-center w-full gap-5 border-b-2 pb-3'>
                    <Image src={Logo} width={150} height={150} alt='logo' data-aos="flip-left"/>
                    <p className='flex flex-cols items-center justify-center text-[0.8rem] text-blue-900 font-semibold gap-2' data-aos="zoom-in"><FaCircle size={5} />La tecnología impulsa el crecimiento, la eficiencia y la toma de decisiones.</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-5 p-5 sm:p-10 md:p-15 lg:p-20 bg-black text-white text-center gap-10 max-w-[100%] bg-[url("/images/fondo_titulo.png")] bg-cover bg-center'>
                    <h1 className='text-[2.5rem] lg:text-[3rem] font-bold' data-aos="fade-up">Diagnóstico de Transformación Digital y Automatización</h1>
                    {/*<h2 className='text-[1.2rem] font-semibold'>El objetivo es identificar el nivel actual de madurez tecnológica de la empresa y detectar oportunidades de mejora, automatización, integración de sistemas, analítica de datos e innovación digital, con el fin de priorizar iniciativas de alto impacto para el negocio.</h2>*/}
                    <h3 className='text-[1rem] font-semibold' data-aos="fade-up">Esta encuesta permite evaluar de forma rápida y estructurada áreas clave de la operación empresarial, incluyendo procesos, sistemas, datos, atención al cliente, seguridad e innovación. Las respuestas ayudarán a generar un diagnóstico ejecutivo con fortalezas, oportunidades de mejora, riesgos prioritarios y posibles iniciativas tecnológicas para los próximos 6 a 12 meses.</h3>                    
                </div>
                <div className='whitespace-pre-wrap text-[1rem] text-center font-semibold' data-aos="zoom-in">
                    {texto_instrucciones}
                </div>
            </div>
        </>
    )
}