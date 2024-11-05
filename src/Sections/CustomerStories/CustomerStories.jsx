import React from 'react'

import './CustomerStories.css'
import MainTestimonial from '../../Components/MainTestimonial/MainTestimonial'
import TestomnialCard from '../../Components/TestomnialCard/TestemonialCard'
import { IoCodeSlashOutline } from "react-icons/io5";

function CustomerStories() {
  return (
    <div className='customer-stories__container section'>
        <div className='section__header'>
            <div>
                Customer stories
            </div>
        </div>
        <div className='section__body'>
            <MainTestimonial 
            logo={'3.png'}
            title={'ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.'}
            desc={'“ToDesktop provided us with a polished desktop app in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver new and improved features to our customers within days.”'}
            tags={['Chromeless UI', 'Native spellcheck', 'Task time in menubar', 'Notification count in the dock', 'Global hotkey to create task']}
            />
            <div className='d-flex flex-wrap gap-3 mt-5'>
                <TestomnialCard 
                    title={'Native APIs'}
                    desc={"What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience."}
                    person={{name: 'jordan ismaile' , company: 'mitra', img: 'ceo.jpg'}}
                    icon={<IoCodeSlashOutline />}
                    color={'rgb(204, 204, 254)'}
                />
                <TestomnialCard 
                    title={'Native APIs'}
                    desc={"What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience."}
                    person={{name: 'jordan ismaile' , company: 'mitra', img: 'ceo.jpg'}}
                    icon={<IoCodeSlashOutline />}
                    color={'rgb(204, 204, 254)'}
                />
                <TestomnialCard 
                    title={'Native APIs'}
                    desc={"What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience."}
                    person={{name: 'jordan ismaile' , company: 'mitra', img: 'ceo.jpg'}}
                    icon={<IoCodeSlashOutline />}
                    color={'rgb(204, 204, 254)'}
                />
            </div>
        </div>
    </div>
  )
}

export default CustomerStories