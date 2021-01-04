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
import SignInForm from './Components/Forms/SignIn';
import RegisterForm from './Components/Forms/Register';

const app = new Clarifai.App({
  apiKey: '585d42f3bab543ebb7c64425508f87fc'
 });

 const initialState = {
  input: '',
  imgURL: '',
  boxes: [],
  isSignedIn: false,
  user: {
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
  route: 'signin',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: '',
      boxes: [],
      isSignedIn: false,
      user: {
        name: '',
        email: '',
        entries: 0,
        joined: '',
      },
      route: 'signin',
    }
  }

  componentDidMount() {
    if(sessionStorage.getItem('state')) {
      this.setState(JSON.parse(sessionStorage.getItem('state')));
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

  updateUserEntries = () => {
    let user = this.state.user;
    user.entries++;
    this.setState({user: user});

    fetch('http://localhost:3001/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              email: this.state.user.email,
            })
        })
  }

  onDetectPress = () => {
    this.setState({imgURL: this.state.input, boxes: []})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => {
        this.updateUserEntries();
        this.displayBoxes(this.calculateBoxes(response));
        }
      )
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    if(route === 'signout'){
      this.setState(initialState);
      this.setState({isSignedIn: false});
      sessionStorage.removeItem('state');
    }
    else if(route === 'home'){
      this.setState({isSignedIn: true});
      sessionStorage.setItem('state', JSON.stringify(this.state));
    }
  }

  loadUser = (user) => {
    this.setState({user: user})
  }

  displayRoute = () => {
    switch(this.state.route){
      case 'signin':
      case 'signout':
        return <SignInForm loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      case 'home':
        return (
        <div>
          <Logo/>
          <Rank user={this.state.user}/>
          <ImageLinkForm predictions={this.state.predictions} onInputChange={this.onInputChange} onDetectPress={this.onDetectPress}/>
          <FaceRecognition boxes={this.state.boxes} imgURL={this.state.imgURL}/>
        </div>)
      case 'register':
        return <RegisterForm onRouteChange={this.onRouteChange}/>
      
      default:
         return <div></div>
    }
  }

  render() { 
    return (
      <div className="App">
        <Particles className='particles' params={ParticleParams}/>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        {this.displayRoute()} 
      </div>
      );
    }
  }
  
  export default App;
  