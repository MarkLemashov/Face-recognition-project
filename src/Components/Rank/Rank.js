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
            <div className='black f4 mt4 bold fw6'>
                This magic box will detect faces in image urls
            </div>
        </div>
    )
}

export default Rank;