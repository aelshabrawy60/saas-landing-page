import React from 'react'

import './Details.css'
import DetailCard from '../../Components/DetailCard/DetailCard'
import FeaeturesStripe from '../../Components/FeatuersStripe/FeaturesStripe'

function Details() {
  return (
    <div className='details_container section'>
        <div className='section__header'>
            <div>
                CodeWizard handles the details
            </div>
        </div>
        <div className='section__body'>
            <div className='row m-0 row-gap-4'>
                <div className='col-lg-4 d-flex flex-column gap-4'>
                    <DetailCard title={'Native Notifications'} img={'notifications.png'}/>
                    <DetailCard title={'Access to Native APIs'} desc={'ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date.'} img={'apis.png'}/>
                </div>
                <div className='col-lg-4 d-flex flex-column gap-4'>
                    <DetailCard title={'Auto Updates'} desc={'We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.'} img={'auto-updates.png'}/>
                    <DetailCard title={'Customizable look and feel'} img={'look-and-feel.png'}/>
                </div>

                <div className='col-lg-4 d-flex flex-column gap-4'>
                    <DetailCard title={'Plugins'} img={'plugins.png'}/>
                    <DetailCard title={'Native Installers'} desc={'We even provide a magic link which will detect your users operating system & download the most up to date version of your app.'} img={'installers.png'}/>
                </div>
            </div>
            <div className='mt-5'>
                <FeaeturesStripe/>
            </div>
        </div>
    </div>
  )
}

export default Details