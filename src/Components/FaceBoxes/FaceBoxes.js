import React from 'react';
import './FaceBoxes.css'

const FaceBoxes = ({boxes}) => {
    return (
        <div>
        {
            boxes.map((box,index) => {
                return <div key={index} className='bounding-box' style={box}/>;
            })
        }
        </div>
    )
}

export default FaceBoxes;