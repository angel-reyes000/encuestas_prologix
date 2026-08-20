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
            //console.log("SECCION: ", encuesta[i].seccion)
            for (let j = 0; j < encuesta[i].preguntas.length; j++) {
                if (encuesta[i].preguntas[j].respuesta !== undefined) {
                    //console.log(encuesta[i].preguntas[j].respuesta)
                    contadorRespuestas += 1
                    //console.log("Contador respuestas: " + contadorRespuestas)
                }
                //console.log(encuesta[i].preguntas[j].pregunta)
            }
        }

        setEstadoEncuesta(encuesta)
        //console.log("ESTADO ENCUESTA: ", estadoEncuesta)
        setRespuestasEncuesta(estadoEncuesta)

        if (contadorRespuestas === 20) {
            setEncuestaTerminada(true);
            setRespuestasEncuesta([...encuesta])
        }

        //console.log("ACCA: ", encuesta[0].preguntas)
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

    useEffect(() => window.scrollTo(0, 0), [])

    // Valor puramente visual para la barra de progreso: se calcula a partir
    // del mismo arreglo "encuesta" que ya se usa para renderizar, sin tocar
    // ningún estado ni handler existente.
    const totalPreguntas = 20;
    let totalContestadas = 0;
    for (let i = 0; i < encuesta.length; i++) {
        for (let j = 0; j < encuesta[i].preguntas.length; j++) {
            if (encuesta[i].preguntas[j].respuesta !== undefined) {
                totalContestadas += 1;
            }
        }
    }
    const porcentajeProgreso = Math.round((totalContestadas / totalPreguntas) * 100);

    const etiquetasEscala = ['Muy bajo', 'Bajo', 'Medio', 'Alto', 'Muy alto'];

    return (
        <>
            {/* Barra de progreso sticky, solo visual */}
            <div className="sticky top-0 z-20 -mx-5 sm:-mx-10 md:-mx-16 lg:-mx-10 mb-10 bg-slate-50/90 backdrop-blur-sm px-5 sm:px-10 md:px-16 lg:px-10 pt-4 pb-3 border-b border-slate-200">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[rgb(0,0,90)]">
                        Diagnóstico de Transformación Digital
                    </span>
                    <span className="text-sm font-semibold text-slate-500 tabular-nums">
                        {totalContestadas}/{totalPreguntas} respondidas
                    </span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div
                        className="h-full rounded-full bg-linear-to-r from-[rgb(0,0,80)] to-[rgb(0,90,200)] transition-all duration-500 ease-out"
                        style={{ width: `${porcentajeProgreso}%` }}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-10 md:gap-12">
                {encuesta.map((secciones: Encuesta, indiceSeccion: number) => (
                    <div
                        key={secciones.id}
                        className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center gap-4 px-5 sm:px-8 py-5 bg-linear-to-r from-[rgb(0,0,45)] via-[rgb(0,0,80)] to-[rgb(0,0,110)]">
                            <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white/15 text-white font-bold text-sm">
                                {String(indiceSeccion + 1).padStart(2, '0')}
                            </span>
                            <h1 className="text-white text-[1.35rem] sm:text-[1.6rem] font-semibold leading-tight">
                                {secciones.seccion}
                            </h1>
                        </div>

                        <div className="flex flex-col divide-y divide-slate-100">
                            {secciones.preguntas.map((preguntas: Preguntas, indicePregunta: number) => (
                                <div
                                    key={indicePregunta}
                                    className="flex flex-col gap-4 px-5 sm:px-8 py-6"
                                >
                                    <h2 className="text-[1.05rem] sm:text-[1.15rem] font-semibold text-slate-800 leading-snug">
                                        {preguntas.pregunta}
                                    </h2>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-wrap gap-3 sm:gap-4">
                                            {[1, 2, 3, 4, 5].map((valor) => (
                                                <button
                                                    key={valor}
                                                    type="button"
                                                    onClick={() => preguntas.fun(valor)}
                                                    aria-pressed={preguntas.respuesta === valor}
                                                    aria-label={`Calificación ${valor} de 5: ${etiquetasEscala[valor - 1]}`}
                                                    className={
                                                        "flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 text-[1.05rem] font-semibold cursor-pointer transition-all duration-200 ease-out active:scale-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 " +
                                                        (preguntas.respuesta === valor
                                                            ? "border-transparent bg-linear-to-br from-[rgb(0,0,70)] to-[rgb(0,60,160)] text-white shadow-md shadow-blue-900/20 scale-105"
                                                            : "border-slate-300 text-slate-500 hover:border-[rgb(0,0,90)] hover:text-[rgb(0,0,90)] hover:bg-slate-50")
                                                    }
                                                >
                                                    {valor}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="flex justify-between text-xs text-slate-400 px-1 max-w-[220px] sm:max-w-[260px]">
                                            <span>Muy bajo</span>
                                            <span>Muy alto</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl bg-linear-to-r from-[rgb(0,0,50)] via-[rgb(0,0,80)] to-[rgb(0,0,100)] my-16 gap-5 shadow-lg"
                data-aos="zoom-in"
            >
                <h3 className="text-[1.3rem] sm:text-[1.5rem] font-semibold text-white max-w-xl">
                    Genera un resumen y un promedio de tus resultados, descargable en PDF
                </h3>
                {encuestaTerminada ? (
                    <p className="text-blue-200 text-sm">Todo listo. Tu reporte está a un clic.</p>
                ) : (
                    <p className="text-orange-200 text-sm">
                        Completa todas las preguntas antes de poder generar tu reporte
                    </p>
                )}
                <button
                    onClick={() => {
                        if (encuestaTerminada) {
                            setGeneraReporte(true);
                            setRespuestasEncuesta(estadoEncuesta)
                        }}}
                    className={
                        "text-center text-[1.15rem] sm:text-[1.4rem] px-8 sm:px-10 py-3 font-semibold w-fit rounded-full whitespace-pre transition-all duration-200 ease-out " +
                        (encuestaTerminada
                            ? " bg-linear-to-r from-orange-300 to-orange-500 text-[rgb(0,0,60)] cursor-pointer active:scale-95 hover:shadow-[0_8px_30px_-4px_rgb(255,170,50)] hover:-translate-y-0.5 "
                            : " bg-white/10 text-white/50 cursor-not-allowed ")
                    }
                    data-aos="zoom-in"
                    disabled={!encuestaTerminada}
                >
                    {'Generar reporte >'}
                </button>
            </div>
        </>
    )
}