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
                <img className ="contact-image"
                  src="https://camo.githubusercontent.com/0ecfd68856bedf2d56070afe2e2ff89780b1980a/68747470733a2f2f696d6167652e6962622e636f2f6a456b6364642f66726f6e745f656e645f646576656c6f706572735f6f70656e696e67735f312e676966"
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