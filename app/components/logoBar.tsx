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
            <div className='flex flex-cols justify-between items-center w-full gap-5 border-b-2 pb-3'>
                <Image src={Logo} width={150} height={150} alt='logo' data-aos="flip-left"/>
                <p className='flex flex-cols items-center justify-center text-[0.8rem] text-blue-900 font-semibold gap-2' data-aos="zoom-in"><FaCircle size={5} />La tecnología impulsa el crecimiento, la eficiencia y la toma de decisiones.</p>
            </div>
    )
}