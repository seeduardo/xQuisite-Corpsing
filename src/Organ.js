import React, { Component } from 'react';
import OrganTab from './OrganTab'

class Organ extends Component {

  render() {
    const {organ} = this.props
    return (
      <div >
        <img
        className="organ-blowup" onClick={() => this.props.handleOrganClick(organ)} alt={organ.organ} src={organ.image}/>
        {
          organ.tabs.map(
            tab => <OrganTab className="tab" organ={organ} tab={tab} key={tab} />
          )
        }
      </div>
    );
  }
}

export default Organ
