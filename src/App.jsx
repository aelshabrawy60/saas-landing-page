import { useState } from 'react'
import './App.css'
import Navbar from './Sections/Navbar/Navbar'
import Hero from './Sections/Hero/Hero'
import AppsRow from './Components/AppsRow/AppsRow'
import PowerdApps from './Sections/PowerdApps/PowerdApps'
import HowItWorks from './Sections/HowItWorks/HowItWorks'
import Details from './Sections/Details/Details'
import CustomerStories from './Sections/CustomerStories/CustomerStories'
import Downlaod from './Sections/Download/Download'
import Pricing from './Sections/Pricing/Pricing'
import Enterprise from './Sections/Enterprise/Enterprise'
import FAQ from './Sections/FAQ/FAQ'
import Bottom from './Sections/Bottom/Bottom'
import Footer from './Sections/Footer/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <div className='gradient-background'>
        <Hero/>
        <PowerdApps/>
      </div>
      <div className='container-xl'>
        <HowItWorks/>
        <Details/>
        <CustomerStories/>
        <Downlaod/>
        <Pricing/>
        <Enterprise/>
        <FAQ/>
        <Bottom/>
      </div>
      <Footer/>
    </>
  )
}

export default App
