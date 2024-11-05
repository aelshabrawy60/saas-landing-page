import React from 'react'

import './TestemonialCard.css'
import { col } from 'framer-motion/client'
import Person from '../Person/Person'

function TestemonialCard({title, icon, color, desc, person}) {
  return (
    <div className='test-card__container p-4'>
        <div className='icon_container mb-3' style={{backgroundColor: color}}>
            {icon}
        </div>
        <div className='test-card__title mb-4'>{title}</div>
        <div className='mb-5 test-card__desc'>
            {desc}
        </div>
        <Person name={person?.name} company={person.company} img={person.img}/>
    </div>
  )
}

export default TestemonialCard