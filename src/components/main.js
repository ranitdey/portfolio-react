import React from 'react'
import {Switch, Route } from 'react-router-dom'

import LandingPage from './landingpage'
import AboutMe from './aboutme'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'

const Main = ()=>(
    <Switch>
        <Route exact path="/portfolio-react" component={LandingPage}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Resume" component={Resume}/>
    </Switch>
)


export default Main