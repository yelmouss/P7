import React from 'react';


import Header from "../Template/Header"
import Footer from "../Template/Footer"
import Error404 from "../notFound/content"




const ErrorNotFound = () => {
    return (
        <>
            <Header />
            <Error404 />
            <Footer />
        </>
    )
}

export default ErrorNotFound