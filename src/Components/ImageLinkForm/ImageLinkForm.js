import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
    return (
        <div className='image_link'>
            <p className='f3'>
                {props.predictions}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-3 form shrinks'>
                    <input className="f4 pa2 w-70 center" type="text" onChange={props.onInputChange}/>
                    <button className="w-30 f4 link ph3 pv2 dib grow white bg-light-purple" onClick={props.onDetectPress}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;