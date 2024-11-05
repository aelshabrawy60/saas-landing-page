import React from 'react'

import './HowItWorks.css'
import StepCard from '../../Components/StepCard/StepCard'

function HowItWorks() {
  return (
    <div className='howItWorks-container section'>
        <div className='section__header'>
            <div>
                How it works
            </div>
        </div>
        <div className='section__body'>
            <div className='d-flex flex-column gap-5'>
                <StepCard 
                    step={1} 
                    title={'Bootstrap straight from your web app'}
                    subtitle={'Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.'}
                    propreties={['Multiple windows', 'Customisable menus', 'Menubar/tray menus', 'Launch on startup', 'Offline support', 'Tabs (Mac only)']}
                />
                <StepCard 
                    step={2} 
                    title={'Add desktop code to customise your web app'}
                    subtitle={'No need to create a new repository, just add code from our desktop APIs to your codebase and get access to system level functionality.'}
                    propreties={['Super-fast global CDN', 'Download links on your domain', 'Download analytics', 'Magic universal links', 'Manage version numbers', 'Native installers for all platforms']}
                />
                <StepCard 
                    step={3} 
                    title={'Publish'}
                    subtitle={'One-click will publish your desktop app to your customers and give you a download link to put on your website.'}
                    propreties={['Super-fast global CDN', 'Download links on your domain', 'Download analytics', 'Magic universal links', 'Manage version numbers', 'Native installers for all platforms']}
                />
            </div>
        </div>
    </div>
  )
}

export default HowItWorks