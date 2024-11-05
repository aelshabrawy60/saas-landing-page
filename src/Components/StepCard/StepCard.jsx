import React from 'react'

import './StepCard.css'
import { MdCheck } from "react-icons/md";
import CodeEditor from '../CodeEditor/CodeEditor';

function StepCard({step, title, subtitle, propreties}) {
  return (
    <div className='step-card__container p-md-5 p-3'>
        <div className='row m-0 row-gap-5'>
            <div className='col-12 col-lg-6'>
                <div>
                    <div className='step-count-containre mb-3'>
                        Step {step}
                    </div>
                    <div className='step-card__title mb-3'>
                        {title}
                    </div>
                    <div className='step-card__subtitle mb-5'>
                        {subtitle}
                    </div>
                    <div className='step-card__propreties row-gap-2 row m-0'>
                        {propreties.map((prop)=> 
                            <div className='step-card__property d-flex col-6 p-0'>
                                <MdCheck className='me-2'/>
                                <span>{prop}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='col-12 p-0 col-lg-6'>
                <div className='p-md-5'>
                    <CodeEditor name={'App.js'} lines={['import {', "     dock,", '     isDesktopApp', "} from '@todesktop/core'", "  ", 'if  (isDesktopApp)  {', '     dock.bounce()', '     dock.setBadge(3)', '}',]}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StepCard