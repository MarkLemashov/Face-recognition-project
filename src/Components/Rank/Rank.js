import React from 'react';

const Rank = ({user}) => {
    return (
        <div>
            <div className='white f1'>
                {'Hello '}
                <span className='capitalize'>{user.name}</span>
            </div>
            <div className='white f3'>
                {'Images submitted: ' + user.entries}
            </div>
            <div className='white f4'>
                {'Faces detected: ' + user.faces_detected}
            </div>
        </div>
    )
}

export default Rank;