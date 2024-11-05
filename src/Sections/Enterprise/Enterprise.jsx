import React from 'react'
import { MdCheck } from "react-icons/md";

import './EnterPrise.css'

function Enterprise({features = ['Whiteglove onboarding', 'Priority support', 'Dedicated account manager', 'Custom features', 'Shared Slack channel', 'Custom Billing']}) {

  return (
    <div className='enterprise-container p-4 section'>
        <div className='row m-0 align-items-end'>
            <div className='col-12 col-md-8'>
                <div className='d-flex flex-column justify-content-between'>
                    <div className='enterprise__label'>Dedicated support and expert guidance.</div>
                    <div className='enterprise__title mb-4'>Enterprise</div>
                    <div>
                        <div className='row m-0'>
                            {features.map((feature)=> <div className='enterprise_feature col-6 d-flex mb-4'><MdCheck className='me-3 fs-5'/>{feature}</div>)}
                        </div>
                    </div>
                </div>
            </div>  
            <div className='col-12 col-md-4'>
                <div className='p-5 text-center call-sales'>
                    <div>Secure, reliable cross-platform desktop apps for enterprise teams.</div>
                    <button className='button-main mt-5 mb-4 w-100 p-3'>Contact Sales</button>
                    <div className='live-chat'>You may also live chat with us by clicking here.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Enterprise