import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className='taalul'>
            <p className='f3'>
                {'Creedies first project. OMG COOL!'}
            </p>
            <div className='center taalul'>
                <div className='center pa4 br3 shadow-3 form taalul'>
                    <input className="f4 pa2 w-70 center" type="text" />
                    <button className="w-30 f4 link ph3 pv2 dib grow white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;