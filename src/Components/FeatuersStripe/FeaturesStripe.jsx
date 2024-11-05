import React from 'react'

import './FeaturesStripe.css'
import { easeIn, motion, useScroll, useTransform } from "framer-motion"

function FeaeturesStripe({features = ['Custome Menues', 'Multi-window support', 'Trays', 'Deep Linking', 'Global Hotkeys', 'Download Analytics', 'Custome Menues', 'Multi-window support', 'Trays', 'Deep Linking', 'Global Hotkeys', 'Download Analytics']}) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-800,0]);

  return (
    <div className='FeaturesStripe_container d-flex py-4'>
        <motion.div className='d-flex justify-content-between gap-4' style={{x}} >
          {features.map((feature)=><div className='feature d-flex align-items-center'><div className='dot_2 me-3'></div>{feature}</div>)}
        </motion.div>
    </div>
  )
}

export default FeaeturesStripe