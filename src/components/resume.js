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
                <h4 style={{color: 'grey'}}>Senior Software Engineer</h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <p>A Software Engineer having 3.6+ years of experience in development of scalable REST/GraphQL API's and distributed systems.</p>
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
                  jobDescription="Responsible for building scalable API's for backend of RFS banking application using Spring-Boot"
                  />
                  <Experience
                    startYear={2018}
                    endYear= "Till Present"
                    jobName="Zapr Media Labs"
                    jobDescription="Acted as an tech lead for building an recommendation app called DEKHO(100k+ downloads in PlayStore).Architected and implemented the backend API's and systems for this app"
                    />
                  <hr style={{borderTop: '3px solid #e22947'}} />
                  <h2>Skills</h2>
                  <Progress
                    skill="Java"
                    progress={88} 
                    />
                    <Progress
                      skill="Python"
                      progress={70}
                      />
                      <Progress
                      skill="JavaScript"
                      progress={86}
                      />
                      <Progress
                        skill="NodeJS"
                        progress={85}
                        />
                        <Progress
                          skill="AWS"
                          progress={85}
                          />
                          <Progress
                          skill="Distributed Systems"
                          progress={88}
                          />
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Resume