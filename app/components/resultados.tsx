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

    // Solo visual: color de la barra según el puntaje de la sección (no altera el cálculo)
    const colorPorPuntaje = (valor: number) => {
        if (valor >= 4) return 'from-emerald-500 to-emerald-400';
        if (valor >= 2.5) return 'from-amber-500 to-amber-400';
        return 'from-rose-600 to-rose-500';
    };

    const mensajePorPuntaje = (valor: number) => {
        if (valor >= 4) return 'Fortaleza consolidada.';
        if (valor >= 2.5) return 'Área de oportunidad a mediano plazo.';
        return 'Brecha crítica que requiere atención prioritaria.';
    };

    return (
        <>
            <div id="contenido" className='flex flex-col gap-6 mb-10'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 pt-10 md:py-12 px-8 sm:px-15 md:px-10 rounded-2xl bg-[url("/images/fondo_titulo.png")] bg-cover bg-center shadow-lg overflow-hidden'>
                    <div className='flex flex-col justify-center gap-3 w-full md:w-[45%] text-white'>
                        <p className='text-blue-300 font-semibold tracking-wide uppercase text-sm'>— Análisis de resultados</p>
                        <h2 className='text-[2rem] sm:text-[2.5rem] font-bold leading-tight'>Necesitas dirección financiera estratégica</h2>
                        <p className='font-medium text-white/85 leading-relaxed'>Hay esfuerzo y buena voluntad, pero falta una visión integral que conecte la información financiera con la toma de decisiones. Sin un líder financiero senior, las inversiones, decisiones de precio, expansión y financiamiento se toman por intuición y no por análisis.</p>
                    </div>
                    <div className='flex justify-center items-center w-full md:w-[40%]'>
                        <GraficaPie promedioTotal={estadoPromedioTotal} />
                    </div>
                </div>

                <div className='flex flex-col bg-white border border-slate-200 rounded-2xl py-8 sm:py-10 px-6 sm:px-10 md:px-14 gap-6 shadow-sm'>
                    <h2 className='text-slate-900 text-2xl sm:text-3xl font-bold'>Puntuación por sección</h2>
                    <div className="flex flex-col gap-6">
                        {respuestasEncuesta.map((obj: any, indice: number) => (
                            <div key={indice} className='flex flex-col gap-2'>
                                <div className='flex justify-between items-baseline text-base sm:text-lg font-semibold gap-5'>
                                    <h3 className="text-slate-700">{obj.seccion}</h3>
                                    <p className='text-slate-900 tabular-nums'>{(lista_promedios[indice].toFixed(2))} <span className="text-slate-400 font-normal text-sm">/5</span></p>
                                </div>
                                <div className='bg-slate-200 rounded-full h-2.5 overflow-hidden'>
                                    <div
                                        className={`bg-linear-to-r ${colorPorPuntaje(lista_promedios[indice])} rounded-full h-full transition-all duration-700 ease-out`}
                                        style={{ width: `${Number(lista_promedios[indice]) * 20}%` }}
                                    />
                                </div>
                                <p className='m-0 p-0 text-sm text-slate-500'>{mensajePorPuntaje(lista_promedios[indice])}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-2'>
                    <DescargarPDF />
                    <button
                        onClick={() => setGeneraReporte(false)}
                        className='flex gap-2 items-center cursor-pointer text-slate-600 font-medium transition-all duration-200 hover:text-[rgb(0,0,90)] active:scale-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 rounded-full px-4 py-2'
                    >
                        <FaRedo style={{ display: 'inline' }} />Reiniciar encuesta
                    </button>
                </div>
            </div>
        </>
    )
}