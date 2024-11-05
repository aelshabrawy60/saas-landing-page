import React from 'react'
import './FAQ.css'
import FAQComponent from '../../Components/FAQComponent/FAQComponent'

function FAQ() {
  return (
    <div className='faq-container section'>
        <div className='section__header'>
            <div>FAQs</div>
        </div>
        <div className='section__body'>
            <div className='row m-0'>
                <div className='col-md-6 col-12'>
                    <FAQComponent/>
                </div>
                <div className='col-md-6 col-12'>
                    <FAQComponent/>
                </div>
                <div className='col-md-6 col-12'>
                    <FAQComponent/>
                </div>
                <div className='col-md-6 col-12'>
                    <FAQComponent/>
                </div>
                <div className='col-md-6 col-12'>
                    <FAQComponent/>
                </div>
                <div className='col-md-6 col-12'>
                    <FAQComponent/>
                </div>
                <div className='col-md-6 col-12'>
                    <FAQComponent/>
                </div>
                <div className='col-md-6 col-12'>
                    <FAQComponent/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FAQ