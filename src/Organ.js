import React, { Component } from 'react';

class Organ extends Component {

  render() {
    const {organ} = this.props
    return (
      <div>
        <img className="organ-blowup" onClick={() => this.props.handleOrganClick(this.props.organ)} alt={organ.organ} src={organ.image}/>
      </div>
    );
  }
}

export default Organ
