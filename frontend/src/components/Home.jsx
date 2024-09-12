import React from 'react'
import Carousel from './layout/Carousel'
import Rooms from './layout/Rooms'
import Services from './layout/Services'
import AboutUs from './layout/AboutUs'
import Gallery from './layout/Gallery'
import Videos from './layout/Videos'
import Testinomial from './layout/Testinomial'
import Contact from './layout/Contact'
import Footer from './layout/Footer'

const Home = () => {
  return (
    <>
        <Carousel />
        <Rooms />
        <Services />
        <AboutUs />
        <Gallery />
        <Videos/>
        <Testinomial/>
        <Contact />
        <Footer />
    </>
  )
}

export default Home
