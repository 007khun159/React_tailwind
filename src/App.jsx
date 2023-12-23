import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytic from './components/Analytic'
import Newletter from './components/Newletter'
import Cards  from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
   <div>
      <Navbar/>
      <Hero/>
      <Analytic/>
      <Newletter/>
      <Cards/>
      <Footer/>
   </div>
  )
}

export default App