import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import myLogo from './logo.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img style={{ paddingTop: '8px' }} src={myLogo} alt="Logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;