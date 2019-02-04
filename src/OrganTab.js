import React, { Component } from 'react';

class OrganTab extends Component {

  render() {
    const {tabName, handleTabClick, clicked} = this.props
    return (
      <div>
        <button className={`tablinks ${clicked}`} onClick={() => handleTabClick(tabName)}>{tabName}</button>
      </div>
    );
  }

}

export default OrganTab
