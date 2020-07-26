import React from 'react';
import Logo from './Components/Logo/Logo.js';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'
import Particles from 'react-particles-js';
import particleParams from './Particles.js';

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={particleParams}/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
