import React, { Component } from 'react';
import OrganTab from './OrganTab'

class Organ extends Component {

  state = {
    clickedTab: ''
  }

  handleTabClick = (tab) => {
    this.setState({
      clickedTab: tab
    })
  }

  render() {
    const {organ, handleOrganClick} = this.props
    return (
      <div >
        <img
        className="organ-blowup" onClick={() => handleOrganClick(organ)} alt={organ.organ} src={organ.image}/>
        {
          organ.tabs.map(
            tab => <OrganTab handleTabClick={this.handleTabClick} className="tab" clicked={
                this.state.clickedTab === tab
                ? "active"
                : "inactive"
                }
                organ={organ} tab={tab} key={tab} />
          )
        }

      </div>
    );
  }
}

export default Organ
