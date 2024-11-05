import React from 'react'

import './Bottom.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Bottom() {
  return (
    <div className='bottom-container row-gap-4 flex-wrap d-flex justify-content-between section'>
        <div className='logo-container'>
            <h1>CodeWizard.</h1>
        </div>
        <div className='bottom_links d-flex gap-5'>
            <a>Documents</a>
            <a><FaXTwitter className='fs-4'/></a>
            <a><FaGithub className='fs-4'/></a>
        </div>
    </div>
  )
}

export default Bottom