import React , {Component} from 'react'
import { Grid, Cell } from 'react-mdl';
import Experience from './experience';
import Progress from './progress';
class Resume extends Component
{
    render(){
        return(
            <div>
            <Grid>
              <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                  <img
                    src="https://avatars0.githubusercontent.com/u/29244702?s=400&u=5379de4d644626956b2440f82e939002398cc2f8&v=4"
                    alt="avatar"
                    style={{height: '200px'}}
                     />
                </div>
    
                <h2 style={{paddingTop: '2em'}}>Ranit Dey</h2>
                <h4 style={{color: 'grey'}}>Software Engineer</h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <p>An Software Engineer, having 2+ years of experience in developing frameworks for automation (selenium,appium using Java,Python and Javascript) and RESTful API development using NodeJs and Express.JS</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                
                <h5>Phone</h5>
                <p>(980) 444-3563</p>
                <h5>Email</h5>
                <p>ranit.dey111@gmail.com</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              </Cell>
              <Cell className="resume-right-col" col={8}>
             
                  <h2>Experience</h2>
                <Experience
                  startYear={2016}
                  endYear={2018}
                  jobName="CGI"
                  jobDescription="Developed an automation framework for RFS 360 Web Services and was responsible for writing code changes for API.Involvement in designing API side framework.
                  Involved in Automation Infrastructure Development using Selenium."
                  />
                  <Experience
                    startYear={2018}
                    endYear= "Till Present"
                    jobName="Zapr Media Labs"
                    jobDescription="Developed mobile automation framework using Appium and Python. Developed Api automation framework using Requests and Python.Mocked servers using NodeJS and ExpressJS. Used MITM Proxy/ Charles Proxy to intercept http calls. Used Postman to test Rest API's.Worked in development of API side using NodeJS and MongoDB."
                    />
                  <hr style={{borderTop: '3px solid #e22947'}} />
                  <h2>Skills</h2>
                  <Progress
                    skill="Java"
                    progress={85} 
                    />
                    <Progress
                      skill="Python"
                      progress={80}
                      />
                      <Progress
                      skill="JavaScript"
                      progress={80}
                      />
                      <Progress
                        skill="NodeJS"
                        progress={70}
                        />
                        <Progress
                          skill="Selenium"
                          progress={85}
                          />
                          <Progress
                          skill="Appium"
                          progress={88}
                          />
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Resume