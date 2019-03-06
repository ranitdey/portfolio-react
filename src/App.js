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
                <Link to="/Skills">Skills</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/">
                <img src="https://mycs.net.au/wp-content/uploads/2016/03/home-icon-flat.png"
                className="home-img">
                </img>
                </Link>

               
            </Navigation>
        </Header>
        
        <Drawer title="Ranit's Portfolio">
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Skills">Skills</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/">
                <img src="https://mycs.net.au/wp-content/uploads/2016/03/home-icon-flat.png"
                className="home-img">
                </img>
                </Link>
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
