import React from 'react';

const FaceRecognition = ({imgURL}) => {
    return (
        <div className='center'>
            <img src={imgURL}/>
        </div>
    )
}

export default FaceRecognition;