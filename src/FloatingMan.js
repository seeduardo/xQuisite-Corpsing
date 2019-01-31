import React, { Component } from 'react';
import floatingMan from './floatingManCopy.jpg';
import HotSpot from './HotSpot'
import initialData from './initialData'

// const floatingMan = 'https://us.123rf.com/450wm/eraxion/eraxion1110/eraxion111000546/11073159-highlighted-vascular-system-.jpg?ver=6'

class FloatingMan extends Component {

  state = {
    initialData: initialData
  }

  render() {
    return (
      <div className="FloatingMan">
          <img src={floatingMan} className="floating-man-image" alt="logo" />
          {
            this.state.initialData.map(
              organ => <HotSpot organ={organ} key={organ.id}
                handleOrganClick={this.props.handleOrganClick}
              />
            )
          }
      </div>
    );
  }
}

export default FloatingMan;
