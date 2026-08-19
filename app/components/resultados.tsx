"use client"

import Image from 'next/image';
import Logo from '../../public/images/logo_prologix_bg_void.png';
import GraficaPie from './graficaPie';
import { useState, useEffect } from 'react';
import { FaRedo, FaDownload } from 'react-icons/fa';
import DescargarPDF from './descargarPDF';

let promedio_seccion_uno = 0
let promedio_seccion_dos = 0
let promedio_seccion_tres = 0
let promedio_seccion_cuatro = 0
let promedio_seccion_cinco = 0
let promedio_seccion_seis = 0
let promedio_seccion_siete = 5

export default function Resultados ({ respuestasEncuesta, setGeneraReporte }: { respuestasEncuesta: any, setGeneraReporte: any }) {
    const [estadoPromedioTotal, setEstadoPromedioTotal] = useState<number>();

    //console.log("Respuestas encuesta:", respuestasEncuesta)

    let promedio_seccion_uno = 0
    let promedio_seccion_dos = 0
    let promedio_seccion_tres = 0
    let promedio_seccion_cuatro = 0
    let promedio_seccion_cinco = 0
    let promedio_seccion_seis = 0
    let promedio_seccion_siete = 0

    let lista_promedios = [
        promedio_seccion_uno,
        promedio_seccion_dos,
        promedio_seccion_tres,
        promedio_seccion_cuatro,
        promedio_seccion_cinco,
        promedio_seccion_seis,
        promedio_seccion_siete,
    ]

    let promedio_total = 0

    for (let i = 0; i < respuestasEncuesta.length; i++) {
        for (let j = 0; j < respuestasEncuesta[i].preguntas.length; j++) {
            let valor = respuestasEncuesta[i].preguntas[j].respuesta
            if (valor) {
                console.log("VALOR", valor)
                lista_promedios[i] += valor
                promedio_total += valor
            }        
            console.log("VALORES: ", valor)    
        }
        // console.log("ANTES DE DIVISION", lista_promedios[i])
        lista_promedios[i] = (lista_promedios[i] / 3)
        console.log("Numero de prom: ", lista_promedios[i])
        // console.log("DIVISION", lista_promedios[i])  
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setEstadoPromedioTotal((promedio_total))
        console.log("PROMEDIO UNO: ", lista_promedios[0])
        //console.log("EstadoPromedioTotal: ", promedio_total)
    })

    return (
        <>
            <div id="contenido" className='flex flex-col gap-5 mb-10'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-0 md:gap-10 pt-10 md:py-8 px-15 md:px-2 bg-[url("/images/fondo_titulo.png")] bg-cover bg-center'>
                    <div className='flex flex-col justify-center gap-3 w-full md:w-[40%] text-white'>
                        <p className='text-blue-400'>-Analisis de resultados</p>
                        <h2 className='text-[2.5rem] font-bold'>Necesitas dirección financiera estratégica</h2>
                        <p className='font-semibold'>Hay esfuerzo y buena voluntad, pero falta una visión integral que conecte la información financiera con la toma de decisiones. Sin un líder financiero senior, las inversiones, decisiones de precio, expansión y financiamiento se toman por intuición y no por análisis.</p>
                    </div>
                    <div className='flex justify-center items-center w-full md:w-[40%]'>
                        <GraficaPie promedioTotal={estadoPromedioTotal} />
                    </div>
                </div>
                <div className='flex flex-col bg-blue-200 py-10 px-5 sm:px-10 md:px-25 gap-6'>
                    <h2 className='text-black text-3xl font-bold'>Puntuacion por seccion</h2>
                    {respuestasEncuesta.map((obj: any, indice: number) => (
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between text-lg font-semibold gap-5'>
                                <h3>{obj.seccion}</h3>
                                <p className='text-black'>{(lista_promedios[indice].toFixed(2))}</p>
                            </div>
                            <div className='bg-gray-500 rounded-3xl h-[8px]'>
                                <div className='bg-gradient-to-r from-blue-900 to-blue-500  rounded-3xl h-full' style={{width: `${Number(lista_promedios[indice]) * 20}%`}}>.</div>
                            </div>
                            <p className='m-0 p-0'>Brecha crítica que requiere atención prioritaria.</p>
                        </div>
                    ))}
                </div>
                <div className='flex justify-around gap-5'>
                    <DescargarPDF />
                    <button onClick={() => setGeneraReporte(false)} 
                        className='flex gap-1 items-center cursor-pointer active:scale-90'>
                            <FaRedo style={{display: 'inline'}}/>Reiniciar encuesta
                    </button>
                </div>
            </div>
        </>
    )
}