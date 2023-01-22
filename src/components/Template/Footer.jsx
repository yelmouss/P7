import React from 'react';
import logoFooter from '../../img/logo-kasa-footer.png'

function Footer() {
    return(
        <footer className='footer'>
            <img src={logoFooter} alt='logo-kasa' className='footer_logo' />
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;