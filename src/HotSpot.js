import React, { Component } from 'react';
// import { Icon } from 'semantic-ui-react';
// import Popup from './Popup'

class HotSpot extends Component {

  state = {
    cursor: false,
    showPopup: false,
    popupOpacity: 0
  }

  truthifyCursor = () => {
    this.setState({
      cursor: true
    },
    () => setTimeout(() => {
      if (this.state.cursor) {
        this.setState({
          showPopup: true
        });
        let fadeIn = setInterval(() => {this.state.popupOpacity <= 1
          ? this.setState({
            popupOpacity: this.state.popupOpacity + 0.025
            })
          : clearInterval(fadeIn)
        }, 100)
      }
    }, 1000)
    )
  }

  falsifyCursor = () => {
    this.setState({
      cursor: false
    },
    () => setTimeout(() => {
      if (this.state.cursor === false) {
        this.setState({
          showPopup: false,
          popupOpacity: 0
        })
      }
    }, 500)
    )
  }

  render() {
    return (
      <div>
          <div className="HotSpot" onMouseEnter={this.truthifyCursor} onMouseLeave={this.falsifyCursor} style={{bottom: this.props.organ.bottom, left: this.props.organ.left}}></div>
          {
            <div className="popup" style={this.state.showPopup
              ? {bottom: this.props.organ.bottom + 50, left: this.props.organ.left + 50, visibility: "visible", opacity: this.state.popupOpacity}
              : null
            }><p>{this.props.organ.title}</p>
              <img src={this.props.organ.image} alt={this.props.organ.organ}/>
              <p>{this.props.organ.quotation}</p>
             </div>

          }

      </div>
    );
  }
}



export default HotSpot;

// <div className="HotSpot" id="brain" > </div>
// <div className="HotSpot" id="hand" > </div>
// <div className="HotSpot" id="gut" > </div>
// </div>

// state = {
//   className: "HotSpot popup"
// }
//
// popup = () => {
//   this.setState({
//     className: "HotSpot popup show"
//   })
//
// }

// <div className={this.state.className} onClick={this.popup} id="brain" >
//   <span className="HotSpot popuptext" > HERE </span>
// </div>
// <div className={this.state.className} onClick={this.popup} id="hand" >
//   <span className="HotSpot popuptext" > HERE </span>
// </div>
