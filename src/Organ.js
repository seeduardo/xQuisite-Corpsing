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
        <div className="tab" >{
          organ.tabs.map(
            tab => <OrganTab handleTabClick={this.handleTabClick}  clicked={
                this.state.clickedTab === tab
                ? "active"
                : "inactive"
                }
                organ={organ} tab={tab} key={tab} />
          )}
          </div>
          {this.state.clickedTab
          ? <div id={organ.id} className="tabcontent">
              <h3>{this.state.clickedTab}</h3>
              <p>{this.state.clickedTab} plus some other stuff from some other source innit.</p>
            </div>
          :null}

      </div>
    );
  }
}

export default Organ
