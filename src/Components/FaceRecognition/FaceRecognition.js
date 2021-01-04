import React from 'react';
import FaceBoxes from '../FaceBoxes/FaceBoxes.js'
import '../FaceBoxes/FaceBoxes.css'

const FaceRecognition = ({imgURL, boxes}) => {
    return (
        <div className='custom_center ma'>
            <div className='absolute mt2'>
                <img id='mainImg' alt='' src={imgURL} height='500px' width='auto'/>
                <FaceBoxes boxes={boxes}/>
            </div>
        </div>
    )
}

export default FaceRecognition;