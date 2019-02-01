import React, { Component } from 'react';

class OrganTab extends Component {



  render() {
    const {organ, tab, handleTabClick, clicked} = this.props
    return (

      <div>
        <button className="tablinks" onClick={() => handleTabClick(tab)}>{tab}</button>
        {
          clicked === "active"
          ? <div id={organ.id} className="tabcontent">
              <h3>{tab}</h3>
              <p>{tab} plus some other stuff from some other source innit.</p>
            </div>
          :null
        }
      </div>

    );
  }
}

export default OrganTab
