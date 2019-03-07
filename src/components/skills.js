import React , {Component} from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import "react-sweet-progress/lib/style.css";


const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`



class Skills extends Component
{
    
    render(){
        return(
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

   

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 } } onClick={() => this.parallax.scrollTo(2)}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }} onClick={() => this.parallax.scrollTo(2)}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }} onClick={() => this.parallax.scrollTo(2)}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>


        <ParallaxLayer offset={2.7} speed={0.8} style={{ opacity: 1 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/440px-Expressjs.png" style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
               </ParallaxLayer>
         <ParallaxLayer offset={2.7} speed={0.8} style={{ opacity: 1 }}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/500px-MongoDB-Logo.svg.png" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.3} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' ,opacity: 0.6 }}>
          <img src="https://www.import.io/wp-content/uploads/2017/10/React-logo.png" style={{ width: '15%' }} />
        </ParallaxLayer>
       

     
        <ParallaxLayer
          offset={1}
          speed={-0.2}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://gatling.io/wp-content/uploads/2018/02/Gatling-dark-logo.png" style={{ width: '20%' }} />
        </ParallaxLayer>
       
              <ParallaxLayer
          offset={1}
          speed={-0.2}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://www.seleniumhq.org/images/big-logo.png" style={{ width: '15%' , marginLeft: "-60%"}} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0.2}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://vikramviknowledgesharing.files.wordpress.com/2017/01/appium.png" style={{ width: '25%', marginLeft: "60%" }} />
        </ParallaxLayer>
        
         <ParallaxLayer
          offset={1.3}
          speed={0.2}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://1000logos.net/wp-content/uploads/2017/07/Docker-Logo-768x227.png" style={{ width: '25%', marginLeft: "60%" }} />
        </ParallaxLayer>

           <ParallaxLayer
          offset={1.3}
          speed={0.2}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://wiki.jenkins.io/download/attachments/2916393/logo-title.png?version=1&modificationDate=1302753947000&api=v2" style={{ width: '25%', marginLeft: "-50%" }} />
        </ParallaxLayer>
        
         <ParallaxLayer
          offset={1.3}
          speed={0.2}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://www.getpostman.com/img/v2/media-kit/Logo/PNG/pm-logo-horiz.png" style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.1}
          speed={-0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://www.python.org/static/img/python-logo@2x.png" style={{ width: '40%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/283px-Java_programming_language_logo.svg.png" style={{ display: 'block', width: '10%', marginLeft: '57%' }} />
           </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://png2.kisspng.com/sh/739861aa9835e998df6718a46b5eadab/L0KzQYm3V8IxN5xojJH0aYP2gLBuTfpifpJ4eARycISwfLFuj71pfJ5xRdV1aYCwccP7TfpifpJ4eARycISwfLFuj702amY2UKprMXG1cYLtWb4zPGM9TqsDOUG4Q4O3V8AxPmY7Tqg7LoDxd1==/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a2a1f9.2428698915320700656662.png" style={{ display: 'block', width: '15%', marginLeft: '-67%' }} />
         </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          <img src="https://nodejs.org/static/images/logo.svg" style={{ width: '20%' }} />
        </ParallaxLayer>
      </Parallax>
           
        )
    }
}

export default Skills