import React from 'react'
import Navbar from './Navbar/Navbar';
import Topbar from './Topbar';
import Slider from './Slider/Slider';
import SingleAbout from './About/SingleAbout';
import SingleHero from './Hero/SingleHero';
// import AllLaw from './Law/AllLaw';
import Footer from './Footer';
const Web = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Slider />
            <SingleAbout />
            <SingleHero />
            {/* <AllLaw/> */}
            <Footer/>
        </>
    )
}

export default Web