import React from 'react';
import Logo from './Components/Logo/Logo.js';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'
import Particles from 'react-particles-js';
import ParticleParams from './Particles.js';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';

const app = new Clarifai.App({
  apiKey: '585d42f3bab543ebb7c64425508f87fc'
 });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onDetectPress = () => {
    this.setState({imgURL: this.state.input})
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
    .then(generalModel => {
      return generalModel.predict(this.state.imgURL);
    })
    .then(response => {
      // var concepts = response['outputs'][0]['data']['concepts']
      console.log(response['outputs'][0]['data']['concepts'][0]['name']);
      console.log(response['outputs'][0]['data']['concepts'][1]['name']);
      console.log(response['outputs'][0]['data']['concepts'][2]['name']);
      console.log(response['outputs'][0]['data']['concepts'][3]['name']);
    })

  }

  render() { 
    return (
      <div className="App">
      <Particles className='particles' params={ParticleParams}/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onDetectPress={this.onDetectPress}/>
      <FaceRecognition imgURL={this.state.imgURL}/> 
      </div>
      );
    }
  }
  
  export default App;
  