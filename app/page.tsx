"use client"

import LogoBar from "./components/logoBar";
import Encabezado from "./components/encabezado";
import Preguntas from "./components/preguntas";
import Resultados from "./components/resultados";
import { useEffect, useState } from "react";

export default function Home() {
  const [generaReporte, setGeneraReporte] = useState<any>(false);
  const [respuestasEncuesta, setRespuestasEncuesta] = useState<object>();

  return (
    <>
    {generaReporte === false ? (
      <div className="py-5">
        <header>
          <Encabezado />
        </header>
        <main>
          <section>
            <Preguntas setGeneraReporte={setGeneraReporte} setRespuestasEncuesta={setRespuestasEncuesta} respuestasEncuesta={respuestasEncuesta} />            
          </section>
        </main>
      </div>
    ) : (
      <div className="py-5">
        <main>
          <section>
            <Resultados respuestasEncuesta={respuestasEncuesta} setGeneraReporte={setGeneraReporte} />
          </section>
        </main>
      </div>
    )}
      
    </>
  );
}
