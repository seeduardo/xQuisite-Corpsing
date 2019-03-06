import React, { Component, Fragment } from 'react';

// let secretInterval
let secretTimer

class HotSpot extends Component {

  state = {
    cursorOverHotspot: false,
    cursorOverPopup: false,
    showPopup: false,
    popupOpacity: 0,
    thumbnailGlow: false,
    secretGlow: false,
    superSecretGlow: false
  }

  componentDidMount() {
    secretTimer = setTimeout(
      () => this.setState({
          secretGlow: true
        },
        () => setTimeout(() =>
          this.setState({
            secretGlow: false
          }), 13000)
      ), 66600)
  }

    // setTimeout(() =>
    //   this.setState({
    //     superSecretGlow: true
    //   },
    //   () => setTimeout(() =>
    //     this.setState({
    //       superSecretGlow: false
    //     }), 5000)
    // ), 20000)

  // secretTimer = setTimeout(
  //   () =>
  //       this.setState({
  //         secretGlow: true
  //       },
  //       () => setTimeout(() =>
  //             this.setState({
  //               secretGlow: false
  //             }), 5000)
  //     ), 30000
  // )

  // if (this.state.cursorOverHotspot) {
  //   this.setState({
  //     secretGlow: false
  //   })
  // } else {
  //   setTimeout(() =>
  //     this.setState({
  //       secretGlow: true
  //     },
  //     () => setTimeout(() =>
  //       this.setState({
  //         secretGlow: false
  //       }), 5000)
  //   ), 10000)}

  componentWillUnmount() {
    clearTimeout(secretTimer)
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
    setTimeout(() => {
      if (this.state.popupOpacity >= 1) {
        this.setState({
          thumbnailGlow: true
        })
      }
    }, 7000);
    clearTimeout(secretTimer)
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
      cursorOverPopup: false
    },
    () => setTimeout(() => {
      if (!this.state.cursorOverHotspot) {
      this.setState({
        showPopup:false,
        popupOpacity: 0,
        thumbnailGlow: false
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
                    ? (this.state.secretGlow
                      ? "EasterEgg secret"
                      : "EasterEgg")
                    : (this.state.superSecretGlow
                      ? "poem-container secret"
                      : "poem-container")
                  )
                }
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
                       ? {top: `${organ.top + 4}%`, left: `${organ.left - 22}%`, visibility: "visible", opacity: this.state.popupOpacity}
                       : null)
                    : (this.state.showPopup
                       ? {top: `${organ.top - 62}%`, left: `${organ.left - 22}%`, visibility: "visible", opacity: this.state.popupOpacity}
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
