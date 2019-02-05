import React, { Component } from 'react';

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
            popupOpacity: this.state.popupOpacity + 0.01
            })
          : clearInterval(fadeIn)
        }, 60)
      }
    }, 800)
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
        popupOpacity: this.state.popupOpacity + 0.01
        })
      : clearInterval(fadeIn)
    }, 60)
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

  handleOrganThumbnailClick = () => {
    this.props.fadeOut();
    setTimeout(() => {
      this.props.handleOrganClick(this.props.organ)
    }, 2500)
  }

  render() {
    const {organ, floatingManOpacity} = this.props
    return (
      <div>
          <div className={
              organ.id === 17
              ? "EasterEgg"
              : "HotSpot"} onMouseEnter={this.truthifyCursorOverHotspot} onMouseLeave={this.falsifyCursorOverHotspot} style={{bottom: organ.bottom, left: organ.left}} id={organ.id}></div>
          {
            <div className="popup"
                 onMouseEnter={this.truthifyCursorOverPopup}
                 onMouseLeave={this.falsifyCursorOverPopup}
                 style={this.state.showPopup
                   ? {bottom: organ.bottom + 50, left: organ.left + 50, visibility: "visible", opacity: this.state.popupOpacity}
                   : null
            }><p>{organ.title}</p>
              <img onClick={
                floatingManOpacity >= 1
                ? this.handleOrganThumbnailClick
                :null
              }
              src={organ.thumbnail} alt={organ.organ}/>
              <p>{organ.quotation}</p>
             </div>

          }

      </div>
    );
  }
}



export default HotSpot;
