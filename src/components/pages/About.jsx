import React from 'react';

import AboutBanner from "../About/Banner"
// import AboutContent from "../components/About/AboutContent"
import Header from "../Template/Header"
import Footer from "../Template/Footer"

const About = () => {
    return(
        <>
            <Header />
           <AboutBanner />
             {/* <AboutContent /> */}
            <Footer />
        </>
    )
}

export default About