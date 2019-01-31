import React, { Component } from 'react';
// import { Icon } from 'semantic-ui-react';
// import Popup from './Popup'

class HotSpot extends Component {

  state = {
    cursorOverHotspot: false,
    cursorOverPopup: false,
    showPopup: false,
    popupOpacity: 0,

  }

  truthifyCursorOverHotspot = () => {
    this.setState({
      cursorOverHotspot: true
    },
    () => setTimeout(() => {
      if (this.state.cursorOverHotspot) {
        this.setState({
          showPopup: true
        });
        let fadeIn = setInterval(() => {this.state.popupOpacity <= 1 && this.state.cursorOverHotspot === true
          ? this.setState({
            popupOpacity: this.state.popupOpacity + 0.025
            })
          : clearInterval(fadeIn)
        }, 100)
      }
    }, 1000)
    )
  }

  falsifyCursorOverHotspot = () => {
    this.setState({
      cursorOverHotspot: false
    },
    () => setTimeout(() => {
      if (this.state.cursorOverHotspot === false && this.state.cursorOverPopup === false) {
        this.setState({
          showPopup: false,
          popupOpacity: 0
        })
      } else if (this.state.cursorOverHotspot === false && this.state.cursorOverPopup === true) {
        this.setState({
          showPopup: true
        })
      }
    }, 800)
    )
  }

  truthifyCursorOverPopup = () => {
    this.setState({
      cursorOverPopup: true,
    });
    let fadeIn = setInterval(() => {this.state.popupOpacity <= 1 && this.state.cursorOverPopup === true
      ? this.setState({
        popupOpacity: this.state.popupOpacity + 0.025
        })
      : clearInterval(fadeIn)
    }, 100)
  }

  falsifyCursorOverPopup = () => {
    this.setState({
      cursorOverPopup: false,
    },
    () => setTimeout(() => {
      if (!this.state.cursorOverHotspot) {
      this.setState({
        showPopup:false,
        popupOpacity: 0
        })
      }
    }, 800)
    )
  }

  render() {
    const {organ, handleOrganClick} = this.props
    return (
      <div>
          <div className="HotSpot" onMouseEnter={this.truthifyCursorOverHotspot} onMouseLeave={this.falsifyCursorOverHotspot} style={{bottom: organ.bottom, left: this.props.organ.left}}></div>
          {
            <div className="popup"
                 onMouseEnter={this.truthifyCursorOverPopup}
                 onMouseLeave={this.falsifyCursorOverPopup}
                 style={this.state.showPopup
                   ? {bottom: organ.bottom + 50, left: organ.left + 50, visibility: "visible", opacity: this.state.popupOpacity}
                   : null
            }><p>{organ.title}</p>
              <img onClick={() => handleOrganClick(this.props.organ)} src={organ.thumbnail} alt={organ.organ}/>
              <p>{organ.quotation}</p>
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
