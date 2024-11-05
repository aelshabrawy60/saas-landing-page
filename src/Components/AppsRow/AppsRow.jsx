import React, { useEffect, useState } from 'react'

import './AppsRow.css'
import { motion, useScroll, useTransform } from "framer-motion"
import AppCard from '../AppCard/AppCard';

function AppsRow({direction, speed, apps}) {
    const { scrollYProgress } = useScroll();
    const direction_ = direction == 0 ? [speed * -1, speed] : [speed, speed * -1]
    const x = useTransform(scrollYProgress, [0, 1], direction_);
  return (
    <div className='apps-row-continer' style={{direction : direction == 0 ? 'rtl': ''}}>
        <motion.div className='d-flex gap-3 gap-md-4' style={{x}}>
            {apps.map((app)=>
              <AppCard name={app.name} img={app.img}/>
            )}
        </motion.div>
    </div>
  )
}

export default AppsRow