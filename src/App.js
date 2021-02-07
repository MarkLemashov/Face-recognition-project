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
  errorMessage: '',
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
      errorMessage: '',
    }
  }

  componentDidMount() {
    if(sessionStorage.getItem('state')) {
      this.setState(JSON.parse(sessionStorage.getItem('state')));
    }
    if(sessionStorage.getItem('accessToken')) {

      fetch(ENDPOINTS.BASE + ENDPOINTS.GET_USER, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${sessionStorage.getItem('accessToken')}`
        }
      })
      .then(response => {
        if(response.status === 200) {
          return response.json();
        }
        else {
          throw new Error('Error');
        }
      })
      .then(user => {
        this.setState({user: user, isSignedIn: true, route: 'home'});
      })
      .catch(err => {
        sessionStorage.removeItem('accessToken');
        this.resetState();
      })
    }
  }

  // componentWillUnmount() {
  //   sessionStorage.setItem('state', JSON.stringify(this.state));
  // }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateBoxes = (regions) => {
    const boxes = [];
    const img = document.getElementById('mainImg');
    const height = Number(img.height);
    const width = Number(img.width);

    regions.forEach(element => {
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
    this.setState({imgURL: this.state.input, boxes: [], errorMessage: ''})

    fetch(ENDPOINTS.BASE + ENDPOINTS.SUBMIT_IMAGE, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${sessionStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({
          image_url: this.state.input,
      })
  })
  .then(response => {
    if(response.status === 401) {
      this.resetState();
      this.onRouteChange('signin');
    }
    else {
      return response.json();
    }
    })
  .then(data => {
    this.displayBoxes(this.calculateBoxes(data.regions));
    this.setState({user: data.user});
    sessionStorage.setItem('state', JSON.stringify(this.state));
  })
  .catch(err => this.setState({errorMessage: 'The server could not open the link you provided, please try a different one'}));
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    if(route === 'signout'){
      this.resetState();
      this.setState({isSignedIn: false});
      sessionStorage.removeItem('accessToken');
    }
    else if(route === 'home'){
      this.setState({isSignedIn: true});
      sessionStorage.setItem('state', JSON.stringify(this.state));
    }
  }

  loadUser = (user) => {
    this.setState({user: user});
    sessionStorage.setItem('state', JSON.stringify(this.state));
  }

  resetState = () => {
    this.setState(initialState);
    sessionStorage.removeItem('state');
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
          <div className="error_text">{this.state.errorMessage}</div>
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
  