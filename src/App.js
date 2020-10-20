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
      boxes: [],
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateBoxes = (data) => {
    const boxes = [];
    const img = document.getElementById('mainImg');
    const height = Number(img.height);
    const width = Number(img.width);

    data.outputs[0].data.regions.forEach(element => {
      boxes.push({
        top: element.region_info.bounding_box.top_row * height,
        left: element.region_info.bounding_box.left_col * width,
        bottom: height - element.region_info.bounding_box.bottom_row * height,
        right: width - element.region_info.bounding_box.right_col * width,
      });
    })

    return boxes;

  }

  displayBoxes = (boxes) => {
    this.setState({boxes: boxes});
  }

  onDetectPress = () => {
    this.setState({imgURL: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => {
        this.displayBoxes(this.calculateBoxes(response));
        }
      )
      .catch(err => console.log(err))
  }

  render() { 
    return (
      <div className="App">
      <Particles className='particles' params={ParticleParams}/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm predictions={this.state.predictions} onInputChange={this.onInputChange} onDetectPress={this.onDetectPress}/>
      <FaceRecognition boxes={this.state.boxes} imgURL={this.state.imgURL}/> 
      </div>
      );
    }
  }
  
  export default App;
  