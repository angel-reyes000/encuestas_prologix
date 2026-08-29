export default function Footer () {
    return (
        <>
            <div className="flex justify-between bg-black p-10 text-white text-[0.8rem] gap-10">
                <p className="w-[40%]">
                    Tus respuestas no se almacenan ni se guardan. La información proporcionada se utiliza únicamente para generar tu resultado.
                </p>
                <div className="w-[40%]">
                    <p>Creador: Angel Reyes</p>
                    <p>Contacto: <a href="mailto:ar731684@gmail.com" className="hover:underline" style={{color: 'lightblue'}} >ar731684@gmail.com</a></p>
                </div>
            </div>
        </>
    )
}