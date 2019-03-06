import React from 'react'
import {Switch, Route } from 'react-router-dom'

import LandingPage from './landingpage'
import AboutMe from './skills'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'
import Skills from './skills';

const Main = ()=>(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/Skills" component={Skills}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Resume" component={Resume}/>
    </Switch>
)


export default Main