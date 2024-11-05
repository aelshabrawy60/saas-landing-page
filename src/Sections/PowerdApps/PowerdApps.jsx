import React from 'react'

import './PowerdApps.css'
import AppsRow from '../../Components/AppsRow/AppsRow'
import { PiArrowBendLeftDown } from "react-icons/pi";
import { PiArrowBendRightDown } from "react-icons/pi";

const apps = [
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
  {name: 'sunsama', img: "5.png"},
  {name: 'rise', img: "2.png"},
  {name: 'clickup', img: "1.png"},
]


function PowerdApps() {
  return (
    <div className='PowerdApps-container d-flex flex-column gap-4'>
        <div className='d-flex justify-content-center'>
          <div className='powerd-app-header mb-3'>
              <PiArrowBendLeftDown className='fs-4 mt-3'/>
              <span className='mx-3 fs-md-5 fs-6'>Apps powered by SKILLBRIDGE</span>
              <PiArrowBendRightDown className='fs-4 mt-3'/>
          </div>
        </div>
        <AppsRow direction={0} speed={100} apps={apps.slice(0, apps.length /2)}/>
        <AppsRow direction={1} speed={100} apps={apps.slice(apps.length /2 +1 , apps.length)}/>
    </div>
  )
}

export default PowerdApps