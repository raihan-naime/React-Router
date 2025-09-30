import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <p>Thank You for visiting our website</p>
            <Link to={'/terms'}>Terms</Link>
            <Link to={'condition'}>Condition</Link>
        </div>
    );
};

export default Footer;