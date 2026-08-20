"use client"

import Image from 'next/image';
import Logo from '../../public/images/logo_prologix_bg_void.png';
import { FaCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function LogoBar () {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
            delay: 0
        })
    }, [])

    return (
            <div className='flex flex-row flex-wrap justify-between items-center w-full gap-4 sm:gap-5 pb-4 border-b border-slate-200'>
                <Image src={Logo} width={150} height={150} alt='logo' className='w-[110px] sm:w-[130px] md:w-[150px] h-auto' data-aos="flip-left"/>
                <p
                    className='flex flex-row items-center justify-center text-[0.8rem] sm:text-[0.85rem] text-[rgb(0,0,90)] font-semibold gap-2'
                    data-aos="zoom-in"
                >
                    <FaCircle size={5} className='text-blue-400 shrink-0' />
                    La tecnología impulsa el crecimiento, la eficiencia y la toma de decisiones.
                </p>
            </div>
    )
}