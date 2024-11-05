import React from 'react'

import './MainTestimonial.css'
import { MdCheck } from "react-icons/md";
import Person from '../Person/Person';


function MainTestimonial({logo, title, tags = [], desc}) {
  return (
    <div className='main-testimonial__container'>
        <div className='row m-0 row-gap-5'>
            <div className='col-md-7 col-12 pe-5 p-md-5 p-4'>
                <div className='test-logo__container'>
                    <img src={logo}></img>
                    <div className='test__title mt-3'>
                        {title}
                    </div>
                    <div className='test__tags d-flex my-4 flex-wrap gap-3'>
                        {tags.map((tag)=><div className='tag'><MdCheck className='me-2'/>{tag}</div>)}
                    </div>
                    <div className='test__desc mb-5 mt-5'>
                        {desc}
                    </div>
                </div>
                <Person name={'Micale jemy'} company={'utila'} img={'ceo.jpg'}/>
            </div>
            <div className='col-md-5 col-12 p-0 d-flex align-items-end' style={{position: 'relative'}}>
                <img src='app.webp' className='main-test__img w-100'></img>
            </div>
        </div>
    </div>
  )
}

export default MainTestimonial