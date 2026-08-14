"use client"

import Image from 'next/image';
import Logo from '../../public/images/logo_prologix_bg_void.png';
import GraficaPie from './graficaPie';
import { useState } from 'react';

export default function Resultados ({ respuestasEncuesta }: { respuestasEncuesta: any }) {
    const [estadoPromedioTotal, setEstadoPromedioTotal] = useState<number>();


    let promedio_seccion_uno = 0
    let promedio_seccion_dos = 0
    let promedio_seccion_tres = 0
    let promedio_seccion_cuatro = 0
    let promedio_seccion_cinco = 0
    let promedio_seccion_seis = 0
    let promedio_seccion_siete = 0

    console.log("RRRRR:", respuestasEncuesta)

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
            console.log(valor)
            lista_promedios[i] += valor
            promedio_total += valor
        }
    }

    for (let i = 0; i < lista_promedios.length; i++) {
        promedio_total += Number(lista_promedios[i])
        console.log("PROMEDIO TOTAL FOR", promedio_total);
    }

    console.log(promedio_total)
    console.log("PROMEDIO TOTAL: ", promedio_total)
    console.log("PROMEDIO UNO: ", promedio_seccion_uno / 3)
    console.log("PROMEDIO dos: ", promedio_seccion_dos / 3)
    console.log("PROMEDIOS LISTA: ", lista_promedios[0])
    console.log("TOTALESSSSSSSSSSS", lista_promedios[0] + lista_promedios[1])

    promedio_total = lista_promedios[0] + lista_promedios[1] + lista_promedios[2] + lista_promedios[3] + lista_promedios[4] + lista_promedios[5] + lista_promedios[6]

    return (
        <>
            <div className='flex flex-col'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-0 md:gap-10 pt-10 md:py-8 px-15 md:px-2 bg-[url("/images/fondo_titulo.png")] bg-cover bg-center'>
                    <div className='flex flex-col justify-center gap-3 w-full md:w-[40%] text-white'>
                        <p className='text-blue-400'>-Analisis de resultados</p>
                        <h2 className='text-[2.5rem] font-bold'>Necesitas dirección financiera estratégica</h2>
                        <p className='font-semibold'>Hay esfuerzo y buena voluntad, pero falta una visión integral que conecte la información financiera con la toma de decisiones. Sin un líder financiero senior, las inversiones, decisiones de precio, expansión y financiamiento se toman por intuición y no por análisis.</p>
                    </div>
                    <div className='flex justify-center items-center w-full md:w-[40%]'>
                        <GraficaPie promedioTotal={promedio_total} />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}