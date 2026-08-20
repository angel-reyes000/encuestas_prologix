"use client";

import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa";

export default function DescargarPDF() {

    const descargarPDF = async () => {
        const elemento = document.getElementById("contenido");

        if (!elemento) return;

        const dataUrl = await toPng(elemento, {
            pixelRatio: 2,
        });

        const pdf = new jsPDF("p", "mm", "a4");

        const img = new Image();
        img.src = dataUrl;

        img.onload = () => {
            const ancho = 210;
            const alto = (img.height * ancho) / img.width;

            pdf.addImage(
            dataUrl,
            "PNG",
            0,
            0,
            ancho,
            alto
            );

            pdf.save("Diagnóstico de Transformación Digital y Automatización.pdf");
        };
    };

  return (
    <>
        <button onClick={descargarPDF} 
            className='flex gap-2 items-center cursor-pointer text-white font-semibold px-6 py-2.5 rounded-full bg-linear-to-r from-[rgb(0,0,70)] to-[rgb(0,60,160)] shadow-md shadow-blue-900/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200'>
                <FaDownload style={{display: 'inline'}} />Descargar PDF
        </button>
    </>
  );
}