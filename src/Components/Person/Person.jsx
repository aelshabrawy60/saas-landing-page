import React from 'react'

import './Person.css'

function Person({name, img, company}) {
  return (
    <div className='person__container d-flex gap-3 align-items-center'>
        <div className='person__img-container'>
            <img src={img}></img>
        </div>
        <div>
            <div className='person__name'>{name}</div>
            <div className='person__company'>{company}</div>
        </div>
    </div>
  )
}

export default Person