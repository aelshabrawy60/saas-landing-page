import React from 'react'

import './DetailCard.css'

function DetailCard({title, desc, img}) {
  return (
    <div className='detail-card__container d-flex flex-column px-4 pt-4 pb-4 text-center'>
        <div className='detail-card__title mb-3'>
            {title}
        </div>
        <div className='detail-card__desc mb-auto'>
            {desc}
        </div>
        <img src={img}></img>
    </div>
  )
}

export default DetailCard