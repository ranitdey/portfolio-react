import React , {Component} from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component
{
    render(){
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Ranit Dey</h2>
                <img
                  src="https://media.giphy.com/media/KDhfrexg640D0q9We2/giphy.gif"
                  alt="avatar"
                  style={{height: '250px'}}
                   />
                    </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (980) 444-3563
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        ranit.dey111@gmail.com
                      </ListItemContent>
                    </ListItem>
                  </List>
                </div>
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Contact