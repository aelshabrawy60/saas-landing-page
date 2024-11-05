import React from 'react'
import { GoArrowRight } from "react-icons/go";

import './VersionCard.css'

function VersionCard({version, theme = ["hsl(49deg 100% 90%)", "rgb(113 63 18)", "rgb(250 204 21)", "rgba(234, 178, 8, 0.3)"]}) {
  return (
    <div className='version-card-conatiner gap-2 d-flex align-items-center' style={{backgroundColor: theme[0], borderColor: theme[3]}}>
        <div className='dot' style={{backgroundColor: theme[2], borderColor: theme[3]}}></div>
        <div className='version__text' style={{color: theme[1]}}>v{version}</div>
        <GoArrowRight  style={{color: theme[1]}}/>
    </div>
  )
}

export default VersionCard