import React, { Component } from 'react';
import './App.css';
import ParticleAnimation from 'react-particle-animation'
import ProgressBar from 'react-mdl'

class App extends Component {
  render() {
    return (
      
      <div className="App">
          <ParticleAnimation
          numParticles={50}
          color= {{r :158, g: 217, b: 249, a: 255 }}
          background = {{r :0, g: 40, b: 20, a: 100 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
        />
    
  
      </div>

  
    );
  }
}

export default App;
