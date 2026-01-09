import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import HowItWorks from './components/HowItWorks'
import WhatIncluded from './components/WhatIncluded'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <HowItWorks />
      <WhatIncluded />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
