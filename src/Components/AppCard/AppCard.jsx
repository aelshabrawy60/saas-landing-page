import React from 'react'

import './AppCard.css'

function AppCard({name, img}) {
  return (
    <div className='app-card-container p-3 d-flex flex-column justify-content-between text-center'>
        <div className='app-card__img-container'>
            <img src={img}></img>
        </div> 
        <div>
            <span className='app-card__name'>{name}</span>
        </div>
    </div>
  )
}

export default AppCard