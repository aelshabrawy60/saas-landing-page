import React from 'react'
import { FaFileCode } from "react-icons/fa";
import { BsFillMouse3Fill } from "react-icons/bs";
import { FaRegWindowMaximize } from "react-icons/fa";

import './Hero.css'
import VersionCard from '../../Components/VersionCard/VersionCard';

function Hero() {
  return (
    <div className='hero-container text-left text-md-center p-md-5 p-4 d-flex justify-content-center'>
        <div className='hero-wrapper mt-3 d-flex flex-column align-items-left align-items-md-center'>
            <div className='mb-4'>
                <VersionCard version={'0.63.8'}/>
            </div>
            <div className='hero__featuers d-none d-md-flex mb-5 gap-4'>
                <div className='hero__feature'>
                    <FaFileCode />
                    <div className='hero__feature--text'>
                        Code optional
                    </div>
                </div>
                <div className='hero__feature'>
                    <BsFillMouse3Fill />
                    <div className='hero__feature--text'>
                        Code optional
                    </div>
                </div>
                <div className='hero__feature'>
                    <FaRegWindowMaximize />
                    <div className='hero__feature--text'>
                        Code optional
                    </div>
                </div>
            </div>
            <div className='hero__title mb-4'>
                Code Smarter, Not Harder with AI-Powered
            </div>
            <div className='hero__subtitle mb-4'>
                <p>Transform your ideas into code instantly. Generate snippets, functions, and entire modules with a simple description!</p>
            </div>
            <div className='hero__btns d-flex flex-wrap gap-3'>
                <button className='button-main hero__btn'>Download Now</button>
                <button className='button-stroke hero__btn'>Read Docs</button>
            </div>
        </div>
    </div>
  )
}

export default Hero