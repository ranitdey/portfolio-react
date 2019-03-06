import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import ParticleAnimation from 'react-particle-animation'

class App extends Component {
  render() {
    return (
      <div className="App">
      <ParticleAnimation
          numParticles={500}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
        />
      <div className="demo-big-content">
    <Layout>
        <Header title="My Portfolio" scroll>
            <Navigation>
                <a href="/">Resume</a>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
      </div>
    );
  }
}

export default App;
