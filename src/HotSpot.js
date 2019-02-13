import React, { Component, Fragment } from 'react';

class HotSpot extends Component {

  state = {
    cursorOverHotspot: false,
    cursorOverPopup: false,
    showPopup: false,
    popupOpacity: 0,
    thumbnailGlow: false
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
            popupOpacity: this.state.popupOpacity + 0.008
            })
          : clearInterval(fadeIn)
        }, 18)
      }
    }, 700)
    );
    setTimeout(()=>
      this.setState({
        thumbnailGlow: true
      }), 6000
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
          popupOpacity: 0,
          thumbnailGlow: false
        })
      } else if (this.state.cursorOverHotspot === false && this.state.cursorOverPopup === true) {
        this.setState({
          showPopup: true
        })
      }
    }, 700)
    )
  }

  truthifyCursorOverPopup = () => {
    this.setState({
      cursorOverPopup: true,
    });
    let fadeIn = setInterval(() => {this.state.popupOpacity <= 1 && this.state.cursorOverPopup === true
      ? this.setState({
        popupOpacity: this.state.popupOpacity + 0.008
        })
      : clearInterval(fadeIn)
    }, 18)
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
    }, 500)
    )
  }

  handleOrganThumbnailClick = () => {
    this.props.fadeOut();
    setTimeout(() => {
      this.props.handleOrganClick(this.props.organ)
    }, 2000)
  }

  render() {
    const {organ, floatingManOpacity} = this.props
    return (
      <Fragment>
          <div className={
              organ.id < 17
                ? "HotSpot"
                : (organ.id === 17
                    ? "EasterEgg"
                    : "poem-container")}
                onMouseEnter={this.truthifyCursorOverHotspot}
                onMouseLeave={this.falsifyCursorOverHotspot}
                style={{top: `${organ.top}%`, left: `${organ.left}%`}}
                id={organ.id}></div>
          {<div className="popup"
                onMouseEnter={this.truthifyCursorOverPopup}
                onMouseLeave={this.falsifyCursorOverPopup}
                style={
                  organ.top < 50
                    ? (this.state.showPopup
                       ? {top: `${organ.top + 5}%`, left: `${organ.left - 14}%`, visibility: "visible", opacity: this.state.popupOpacity}
                       : null)
                    : (this.state.showPopup
                       ? {top: `${organ.top - 52}%`, left: `${organ.left - 14}%`, visibility: "visible", opacity: this.state.popupOpacity}
                       : null)
                 }>
              <div className="popup-background">
                <h4 >{organ.title}</h4>
                <img onClick={
                      floatingManOpacity >= 1
                      ? this.handleOrganThumbnailClick
                      :null
                      }
                     src={organ.thumbnail}
                     alt={organ.organ}
                     className={this.state.thumbnailGlow
                       ? "thumbnail"
                       : null
                     }/>
                <br/><br/>
                <div >{organ.quotation}</div>
              </div>
           </div>
          }
      </Fragment>
    );
  }
}



export default HotSpot;
