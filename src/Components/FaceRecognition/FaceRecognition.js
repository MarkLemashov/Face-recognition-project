import React from 'react';
import FaceBoxes from '../FaceBoxes/FaceBoxes.js'
import '../FaceBoxes/FaceBoxes.css'

const FaceRecognition = ({imgURL, boxes}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='mainImg' src={imgURL} height='500px' width='auto'/>
                <FaceBoxes boxes={boxes}/>
            </div>
        </div>
    )
}

export default FaceRecognition;