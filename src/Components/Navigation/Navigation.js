import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    return(
        isSignedIn === true 
        ?
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='f3 link dim black underline pointer' onClick={() => onRouteChange('signout')}>Sign Out</p>
        </nav>
        :
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim black underline pointer pr3' onClick={() => onRouteChange('register')}>Register</p>
        <p className='f3 link dim black underline pointer' onClick={() => onRouteChange('signin')}>Sign In</p>
        </nav>
        )
}

export default Navigation;