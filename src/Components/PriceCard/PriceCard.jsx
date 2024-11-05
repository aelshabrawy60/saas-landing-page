import React from 'react'

import './PriceCard.css'
import { MdCheck } from "react-icons/md";

function PriceCard({data}) {
  return (
    <div className='price-card-container d-flex flex-column p-4'>
        <div className='mb-4'>
            <div className='price__name mb-2'>{data?.name}</div>
            <div className='price__subtitle'>{data?.subtitle}</div>
            <div className='price__price mt-4' style={{display: data?.price == null? 'none': 'block'}}>${data?.price}<span>/{data?.duration}</span></div>
        </div>
        <div className='mb-auto'>
            <div className='key-features'>Key Features</div>
            <ul className='m-0 p-0 my-4'>
                {data?.features.map((feature)=> <div className='price_feature mb-3'><MdCheck className='me-3 fs-5'/>{feature}</div>)}
            </ul>
        </div>
        <div className='mt-2'>
            {data?.type == 1? <button className='button-main fw-bold w-100 p-3'>Get Started</button> : <button className='button-stroke fw-bold w-100 p-3' style={{color : 'var(--main-color)'}}>Get Started</button>}
        </div>
    </div>
  )
}

export default PriceCard