import React from 'react'
import { TbMessageChatbot } from "react-icons/tb";


import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
        <nav class="navbar navbar-expand-lg px-3 py-3 px-md-4">
            <div class="container-fluid">
                <div className='navbar__brand-container'>
                    <a class="navbar-brand fw-bold" href="/">CodeWizard.</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mt-4 mb-5 mt-lg-0 row-gap-3 ms-auto me-auto mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">download</a>
                        </li>
                    </ul>
                    <div className='navbar__main-button-container d-flex justify-content-center'>
                        <button className='button-stroke d-flex justify-contetn-center align-items-center'><TbMessageChatbot className='me-2 fs-4'/>Contact</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}


export default Navbar