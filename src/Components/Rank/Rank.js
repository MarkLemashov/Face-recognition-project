import React from 'react';

const Rank = ({user}) => {
    return (
        <div>
            <div className='white f1'>
                {'Hello ' + user.name}
            </div>
            <div className='white f3'>
                {'You have submitted ' + user.entries + ' images.'}
            </div>
        </div>
    )
}

export default Rank;