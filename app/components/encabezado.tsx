"use client"

import Image from 'next/image';
import Logo from '../../public/images/logo_prologix_bg_void.png';
import { FaCircle, FaInfoCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import LogoBar from './logoBar';

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
            <div className='flex flex-col justify-items-center items-start h-auto w-full gap-8 mb-10'>
                <div className='relative flex flex-col justify-center items-center mt-5 p-8 sm:p-14 md:p-16 lg:p-20 text-white text-center gap-6 w-full rounded-2xl overflow-hidden shadow-lg bg-[url("/images/fondo_titulo.png")] bg-cover bg-center'>
                    <div className='absolute inset-0 bg-linear-to-b from-[rgb(0,0,40)]/90 via-[rgb(0,0,70)]/85 to-[rgb(0,0,100)]/90' />
                    <div className='relative flex flex-col items-center gap-6 max-w-3xl'>
                        <span
                            className='inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide uppercase text-blue-200'
                            data-aos="fade-up"
                        >
                            Diagnóstico ejecutivo · 20 preguntas
                        </span>
                        <h1 className='text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold leading-tight' data-aos="fade-up">
                            Diagnóstico de Transformación Digital y Automatización
                        </h1>
                        <h3 className='text-[0.95rem] sm:text-[1.05rem] font-medium text-white/85 leading-relaxed' data-aos="fade-up">
                            Esta encuesta permite evaluar de forma rápida y estructurada áreas clave de la operación empresarial, incluyendo procesos, sistemas, datos, atención al cliente, seguridad e innovación. Las respuestas ayudarán a generar un diagnóstico ejecutivo con fortalezas, oportunidades de mejora, riesgos prioritarios y posibles iniciativas tecnológicas para los próximos 6 a 12 meses.
                        </h3>
                    </div>
                </div>

                <div
                    className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-start w-full rounded-2xl border border-slate-200 bg-white shadow-sm px-6 sm:px-8 py-6'
                    data-aos="zoom-in"
                >
                    <div className='flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-blue-50 text-[rgb(0,0,90)]'>
                        <FaInfoCircle size={18} />
                    </div>
                    <div className='whitespace-pre-wrap text-[0.95rem] text-left font-medium text-slate-600 leading-relaxed'>
                        {texto_instrucciones}
                    </div>
                </div>
            </div>
        </>
    )
}