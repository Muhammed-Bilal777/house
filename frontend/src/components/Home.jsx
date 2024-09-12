import React, { useEffect, useState } from 'react'
import Carousel from './layout/Carousel'
import Rooms from './layout/Rooms'
import Services from './layout/Services'
import AboutUs from './layout/AboutUs'
import Gallery from './layout/Gallery'
import Videos from './layout/Videos'
import Testinomial from './layout/Testinomial'
import Contact from './layout/Contact'
import Footer from './layout/Footer'
import FormPopup from './popup/FormPopup'
import Portal from './popup/portal'
 
 

const Home = () => {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 60000);  
  }, []);



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
        {showPopup && (
        <Portal>
          <FormPopup />
        </Portal>
 
      )}

    
    </>
  )
}

export default Home
