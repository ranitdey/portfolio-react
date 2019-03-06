import React , {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
class LandingPage extends Component

{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src='https://icons-for-free.com/free-icons/png/512/984119.png'
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Software Engineer</h1>

            <hr/>

          <p>NodeJS | Express | MongoDB | Java | Python | JavaScript | Selenium | Appium | AWS | React</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ranit-dey-587b1081/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/ranit-geek" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
        )
    }
}

export default LandingPage