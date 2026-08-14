"use client"

import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

interface Encuesta {
    id: number
    seccion: string
    preguntas: object | any
}

interface Preguntas {
    pregunta: string
    respuesta: number
    fun: object | any
}

export default function Preguntas ({ setGeneraReporte, setRespuestasEncuesta, respuestasEncuesta }: { setGeneraReporte: any, setRespuestasEncuesta: any, respuestasEncuesta: any}) {
    const [respuestaUno, setRespuestaUno] = useState<number>();
    const [respuestaDos, setRespuestaDos] = useState<number>();
    const [respuestaTres, setRespuestaTres] = useState<number>();
    const [respuestaCuatro, setRespuestaCuatro] = useState<number>();
    const [respuestaCinco, setRespuestaCinco] = useState<number>();
    const [respuestaSeis, setRespuestaSeis] = useState<number>();
    const [respuestaSiete, setRespuestaSiete] = useState<number>();
    const [respuestaOcho, setRespuestaOcho] = useState<number>();
    const [respuestaNueve, setRespuestaNueve] = useState<number>();
    const [respuestaDiez, setRespuestaDiez] = useState<number>();
    const [respuestaOnce, setRespuestaOnce] = useState<number>();
    const [respuestaDoce, setRespuestaDoce] = useState<number>();
    const [respuestaTrece, setRespuestaTrece] = useState<number>();
    const [respuestaCatorce, setRespuestaCatorce] = useState<number>();
    const [respuestaQuince, setRespuestaQuince] = useState<number>();
    const [respuestaDieciseis, setRespuestaDieciseis] = useState<number>();
    const [respuestaDiecisiete, setRespuestaDiecisiete] = useState<number>();
    const [respuestaDieciocho, setRespuestaDieciocho] = useState<number>();
    const [respuestaDiecinueve, setRespuestaDiecinueve] = useState<number>();
    const [respuestaVeinte, setRespuestaVeinte] = useState<number>();

    const [estadoEncuesta, setEstadoEncuesta] = useState<any>();

    const encuesta = [
        {
            id: 1,
            seccion: 'Sección 1. Operación y Procesos',
            preguntas: [
            {
                pregunta: '¿Qué tan documentados están los procesos clave de su empresa?',
                respuesta: respuestaUno,
                fun: setRespuestaUno
            },
            {
                pregunta: '¿Qué tan automatizadas están las tareas operativas repetitivas?',
                respuesta: respuestaDos,
                fun: setRespuestaDos
            },
            {
                pregunta: '¿Qué tan fácil es detectar errores o retrasos en los procesos?',
                respuesta: respuestaTres,
                fun: setRespuestaTres
            }
            ]
        },
        {
            id: 2,
            seccion: 'Sección 2. Sistemas y Herramientas',
            preguntas: [
            {
                pregunta: '¿Qué tan integrados están sus sistemas actuales (ERP, CRM, facturación, inventario, etc.)?',
                respuesta: respuestaCuatro,
                fun: setRespuestaCuatro
            },
            {
                pregunta: '¿Qué tan actualizadas considera sus aplicaciones o plataformas internas?',
                respuesta: respuestaCinco,
                fun: setRespuestaCinco
            },
            {
                pregunta: '¿Qué tan satisfechos están los usuarios con las herramientas que utilizan diariamente?',
                respuesta: respuestaSeis,
                fun: setRespuestaSeis
            }
            ]
        },
        {
            id: 3,
            seccion: 'Sección 3. Datos y Reportes',
            preguntas: [
            {
                pregunta: '¿Qué tan rápido pueden obtener indicadores o reportes importantes para tomar decisiones?',
                respuesta: respuestaSiete,
                fun: setRespuestaSiete
            },
            {
                pregunta: '¿Qué tan confiable considera la información utilizada para reportes y análisis?',
                respuesta: respuestaOcho,
                fun: setRespuestaOcho
            },
            {
                pregunta: '¿Qué tan automatizada está la generación de reportes y dashboards?',
                respuesta: respuestaNueve,
                fun: setRespuestaNueve
            }
            ]
        },
        {
            id: 4,
            seccion: 'Sección 4. Atención al Cliente y Ventas',
            preguntas: [
            {
                pregunta: '¿Qué tan centralizada está la información de clientes y prospectos?',
                respuesta: respuestaDiez,
                fun: setRespuestaDiez
            },
            {
                pregunta: '¿Qué tan automatizado está el seguimiento de oportunidades comerciales o solicitudes de clientes?',
                respuesta: respuestaOnce,
                fun: setRespuestaOnce
            },
            {
                pregunta: '¿Qué tan fácil es medir la satisfacción o experiencia del cliente?',
                respuesta: respuestaDoce,
                fun: setRespuestaDoce
            }
            ]
        },
        {
            id: 5,
            seccion: 'Sección 5. Seguridad y Continuidad',
            preguntas: [
            {
                pregunta: '¿Qué tan protegida considera la información crítica de la empresa?',
                respuesta: respuestaTrece,
                fun: setRespuestaTrece
            },
            {
                pregunta: '¿Qué tan preparados están para recuperarse ante una falla importante del sistema?',
                respuesta: respuestaCatorce,
                fun: setRespuestaCatorce
            },
            {
                pregunta: '¿Qué tan controlados están los accesos de usuarios y permisos a los sistemas?',
                respuesta: respuestaQuince,
                fun: setRespuestaQuince
            }
            ]
        },
        {
            id: 6,
            seccion: 'Sección 6. Innovación y Crecimiento',
            preguntas: [
            {
                pregunta: '¿Qué tan importante es para su empresa invertir en automatización durante los próximos 12 meses?',
                respuesta: respuestaDieciseis,
                fun: setRespuestaDieciseis
            },
            {
                pregunta: '¿Qué tan interesados están en incorporar inteligencia artificial o analítica avanzada en sus operaciones?',
                respuesta: respuestaDiecisiete,
                fun: setRespuestaDiecisiete
            },
            {
                pregunta: '¿Qué tan preparados consideran sus procesos para soportar el crecimiento de la empresa?',
                respuesta: respuestaDieciocho,
                fun: setRespuestaDieciocho
            }
            ]
        },
        {
            id: 7,
            seccion: 'Sección 7. Priorización de Proyectos',
            preguntas: [
            {
                pregunta: '¿Qué nivel de urgencia tiene mejorar o desarrollar nuevas soluciones de software en su empresa?',
                respuesta: respuestaDiecinueve,
                fun: setRespuestaDiecinueve
            },
            {
                pregunta: '¿Qué tan probable es que su empresa inicie un proyecto tecnológico en los próximos 6–12 meses?',
                respuesta: respuestaVeinte,
                fun: setRespuestaVeinte
            }
            ]
        }
    ];
    
    const [encuestaTerminada, setEncuestaTerminada] = useState<boolean>(false);

    let contadorRespuestas = 20;
    useEffect(() => {

        AOS.init({
            duration: 1000, 
            once: false,
            delay: 0
        })

        for (let i = 0; i < encuesta.length; i++){
            console.log("SECCION: ", encuesta[i].seccion)
            for (let j = 0; j < encuesta[i].preguntas.length; j++) {
                if (encuesta[i].preguntas[j].respuesta !== undefined) {
                    console.log(encuesta[i].preguntas[j].respuesta)
                    contadorRespuestas += 1
                    console.log("Contador respuestas: " + contadorRespuestas)
                }
                console.log(encuesta[i].preguntas[j].pregunta)
            }
        }

        setEstadoEncuesta(encuesta)
        console.log("ESTADO ENCUESTA: ", estadoEncuesta)
        setRespuestasEncuesta(estadoEncuesta)

        if (contadorRespuestas === 20) {
            setEncuestaTerminada(true);
            setRespuestasEncuesta([...encuesta])
        }

        console.log("ACCA: ", encuesta[0].preguntas)
    }, [
        respuestaUno,
        respuestaDos,
        respuestaTres,
        respuestaCuatro,
        respuestaCinco,
        respuestaSeis,
        respuestaSiete,
        respuestaOcho,
        respuestaNueve,
        respuestaDiez,
        respuestaOnce,
        respuestaDoce,
        respuestaTrece,
        respuestaCatorce,
        respuestaQuince,
        respuestaDieciseis,
        respuestaDiecisiete,
        respuestaDieciocho,
        respuestaDiecinueve,
        respuestaVeinte,
    ])

    return (
        <>
            <div className="flex flex-col my-15 gap-15">
                {encuesta.map((secciones: Encuesta) => (
                    <div key={secciones.id} className="flex flex-col gap-5" data-aos="fade-up">
                        <h1 className="p-5 bg-linear-to-b from-[rgb(0,0,50)] to-[rgb(0,0,110)] text-white text-[1.7rem] font-semibold">{secciones.seccion}</h1>
                        {secciones.preguntas.map((preguntas: Preguntas) => (
                           <div className="flex flex-col gap-5 pl-3">
                            <h2 className="text-[1.2rem] font-semibold">{preguntas.pregunta}</h2>
                            <div className="flex flex-row gap-5">
                                <p onClick={() => preguntas.fun(1)} className={"py-2 px-4 text-[1.1rem] rounded-3xl border-1 border-black active:scale-90 cursor-pointer" + (preguntas.respuesta === 1 ? ' bg-black text-white ' : '')}>1</p>
                                <p onClick={() => preguntas.fun(2)} className={"py-2 px-4 text-[1.1rem] rounded-3xl border-1 border-black active:scale-90 cursor-pointer" + (preguntas.respuesta === 2 ? ' bg-black text-white ' : '')}>2</p>
                                <p onClick={() => preguntas.fun(3)} className={"py-2 px-4 text-[1.1rem] rounded-3xl border-1 border-black active:scale-90 cursor-pointer" + (preguntas.respuesta === 3 ? ' bg-black text-white ' : '')}>3</p>
                                <p onClick={() => preguntas.fun(4)} className={"py-2 px-4 text-[1.1rem] rounded-3xl border-1 border-black active:scale-90 cursor-pointer" + (preguntas.respuesta === 4 ? ' bg-black text-white ' : '')}>4</p>
                                <p onClick={() => preguntas.fun(5)} className={"py-2 px-4 text-[1.1rem] rounded-3xl border-1 border-black active:scale-90 cursor-pointer" + (preguntas.respuesta === 5 ? ' bg-black text-white ' : '')}>5</p>
                            </div>
                        </div>  
                        ))}                        
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center text-center p-10 bg-linear-to-r from-[rgb(0,0,50)] to-[rgb(0,0,100)] my-20 gap-5">
                <h3 className="text-[1.5rem] font-semibold text-white" data-aos="zoom-in">Genera un resumen y un promedio de tus resultados, DESCARGABLE EN PDF!</h3>
                {encuestaTerminada ? '' : <p className="text-red-300" data-aos="zoom-in">Completa todas las preguntas antes de poder generar tu reporte</p>}
                <button onClick={() => {
                    if (encuestaTerminada) {
                        setGeneraReporte(true);
                        setRespuestasEncuesta(estadoEncuesta)
                    }}} className={"text-center text-[1.5rem] px-10 py-2 font-semibold w-fit rounded-sm whitespace-pre" + (encuestaTerminada ? ' bg-linear-to-r from-orange-300 to-orange-100 cursor-pointer active:scale-95 hover:shadow-[0_8px_30px_-4px_rgb(255,170,50)] ' : ' bg-linear-to-r from-orange-900 to-orange-800 ')} data-aos="zoom-in">{'Generar reporte >'}</button>
            </div>
            {/* <button onClick={() => {
                console.log(encuesta)
            }}>CLICKKKKKKKKKK</button> */}
        </>
    )
}