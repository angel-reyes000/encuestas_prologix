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
            className='flex gap-1 items-center cursor-pointer active:scale-90'>
                <FaDownload style={{display: 'inline'}} />Descargar PDF
        </button>
    </>
  );
}