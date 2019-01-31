import React, { Component } from 'react';

class OrganTab extends Component {

  expandOrganTab = (tab, organ) => {

    console.log(tab)

  }

  render() {
    const {organ, tab} = this.props
    return (

      <div>
        <button className="tablinks" onClick={() => this.expandOrganTab(tab, organ)}>{tab}</button>
        <div id={organ.id} className="tabcontent">
          <h3>{tab}</h3>
          <p>{tab} plus some other stuff from some other source innit.</p>
        </div>
      </div>

    );
  }
}

export default OrganTab
