import React from 'react';
import Logo from './Components/Logo/Logo.js';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'
import Particles from 'react-particles-js';
import ParticleParams from './Particles.js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import SignInForm from './Components/Forms/SignIn';
import RegisterForm from './Components/Forms/Register';
import ENDPOINTS from './constants';

 const initialState = {
  input: '',
  imgURL: '',
  boxes: [],
  isSignedIn: false,
  user: {
    name: '',
    email: '',
    entries: 0,
    faces_detected: 0,
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
        faces_detected: 0,
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

  componentWillUnmount() {
    sessionStorage.setItem('state', JSON.stringify(this.state));
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
    this.setState({imgURL: this.state.input, boxes: []})

    fetch(ENDPOINTS.BASE + ENDPOINTS.SUBMIT_IMAGE, {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          email: this.state.user.email,
          image_url: this.state.input,
      })
  })
  .then(response => {
    return response.json();
    })
  .then(response => {
    this.displayBoxes(this.calculateBoxes(response));
    let user = this.state.user;
    user.entries++;
    user.faces_detected = response.outputs[0].data.regions.length + Number(user.faces_detected);
    this.setState({user: user});
    sessionStorage.setItem('state', JSON.stringify(this.state));
  })
  .catch(err => console.log('error loading image'));
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
        <div className='harta'>
          <Logo/>
          <Rank user={this.state.user}/>
          <ImageLinkForm predictions={this.state.predictions} onInputChange={this.onInputChange} onDetectPress={this.onDetectPress}/>
          <FaceRecognition boxes={this.state.boxes} imgURL={this.state.imgURL}/>
        </div>)
      case 'register':
        return <RegisterForm onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
      
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
  