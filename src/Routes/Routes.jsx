import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Offre from '../components/pages/offre';


const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />     
                <Route exact path="/About" element={<About />} />     
                <Route exact path="/offre/:id" element={<Offre />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;