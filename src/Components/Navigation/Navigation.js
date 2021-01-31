import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
    return(
        isSignedIn === true 
        ?
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='nav_btn f3 link black pointer' onClick={() => onRouteChange('signout')}>Sign Out</p>
        </nav>
        :
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='nav_btn f3 link black pointer pr3' onClick={() => onRouteChange('register')}>Register</p>
        <p className='nav_btn f3 link black pointer' onClick={() => onRouteChange('signin')}>Sign In</p>
        </nav>
        )
}

export default Navigation;