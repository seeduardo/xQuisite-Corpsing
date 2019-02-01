import React, { Component } from 'react';

class OrganTab extends Component {

  render() {
    const {organ, tab, handleTabClick, clicked} = this.props
    return (
      <div>
        <button className="tablinks" onClick={() => handleTabClick(tab)}>{tab}</button>
      </div>
    );
  }

}

export default OrganTab
