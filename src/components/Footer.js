import React from 'react';

import Responsive from './common/Responsive';

const Footer = () => {
    return (
        <footer className="Footer">
            <Responsive modifier="footer">
                <p className="_attribution">© Sean McPherson 2018</p>
                <p className="_sdg">(SDG)</p>
            </Responsive>
        </footer>
    );
};

export default Footer;
