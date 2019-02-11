import React, { Component } from 'react';
// import floatingMan from './floatingManCopy.jpg';
import HotSpot from './HotSpot'
import initialData from './initialData'

// const floatingMan = 'https://us.123rf.com/450wm/eraxion/eraxion1110/eraxion111000546/11073159-highlighted-vascular-system-.jpg?ver=6'

const floatingMan = 'http://localhost:3001/organAndFloatingManImages/FloatingMan.jpg'

class FloatingMan extends Component {

  state = {
    initialData: initialData,
    floatingManOpacity: 0
  }

  componentDidMount() {
    let fadeIn = setInterval(() => {this.state.floatingManOpacity <= 1
      ? this.setState({
        floatingManOpacity: this.state.floatingManOpacity + 0.008
        })
      : clearInterval(fadeIn)
    }, 20)
  }

  fadeOut = () => {
    let fadeOut = setInterval(() => {this.state.floatingManOpacity > 0
      ? this.setState({
        floatingManOpacity: this.state.floatingManOpacity - 0.008
        })
      : clearInterval(fadeOut)
    }, 20)
  }

  render() {
    return (
      <div style={{opacity: this.state.floatingManOpacity}} className="FloatingMan">
          <img src={floatingMan} className="floating-man-image" alt="logo" />
          {
            this.state.initialData.map(
              organ => <HotSpot floatingManOpacity={this.state.floatingManOpacity} fadeOut={this.fadeOut} organ={organ} key={organ.id}
                handleOrganClick={this.props.handleOrganClick}
              />
            )
          }
      </div>
    );
  }
}

export default FloatingMan;
