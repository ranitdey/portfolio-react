import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Grid, Cell} from 'react-mdl'
import ParticleAnimation from 'react-particle-animation'
import Main from './components/main'
import {Link} from 'react-router-dom'

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
    
    <Layout>
        <Header className="header-color" title="Ranit's Portfolio" scroll>
            <Navigation>
                <Link to="/Resume" >Resume</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
