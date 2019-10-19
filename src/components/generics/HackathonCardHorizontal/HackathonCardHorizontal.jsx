import React, { Component, Fragment } from 'react'
import { HackathonCard, HackathonPicture, HackathonIcon } from 'generics'

import './HackathonCardHorizontal.scss'

export class HackathonCardHorizontal extends Component {
  render() {
    return (
      <Fragment>
        <HackathonCard>
          <div className="hackathonCardHorizontal">
            <div className="hackathonCardHorizontal picture">
              <HackathonPicture imgSrc={this.props.imgSrc} />
            </div>
            {this.props.title ?
              <div className="hackathonCardHorizontal content">
                <div className="hackathonCardHorizontal content title">
                  {this.props.title}
                </div>
                <div className="hackathonCardHorizontal content contentText">
                  {this.props.text}
                </div>
              </div>
              :
              <div className="hackathonCardHorizontal text">
                {this.props.text}
              </div>
            } 
            {this.props.imgIcon ? 
              <div className="hackathonCardHorizontal icon">
                <HackathonIcon imgSrc={this.props.imgIcon}/>
              </div>
              : null
            }
            
          </div>
        </HackathonCard>
      </Fragment>
    )
  }
}

