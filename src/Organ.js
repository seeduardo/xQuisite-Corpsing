import React, { Component } from 'react';
import OrganTab from './OrganTab'

class Organ extends Component {

  state = {
    clickedTab: '',
    organOpacity: 0
  }

  componentDidMount() {
    let fadeIn = setInterval(() => {this.state.organOpacity <= 1
      ? this.setState({
        organOpacity: this.state.organOpacity + 0.01
        })
      : clearInterval(fadeIn)
    }, 100)
  }

  // fadeOut = () => {
  //   let fadeOut = setInterval(() => {this.state.organOpacity > 0
  //     ? this.setState({
  //       organOpacity: this.state.organOpacity - 0.01
  //       })
  //     : clearInterval(fadeOut)
  //   }, 100)
  // }
  //
  // componentWillUnmount() {
  //   let fadeOut = setInterval(() => {this.state.organOpacity > 0
  //     ? this.setState({
  //       organOpacity: this.state.organOpacity - 0.01
  //       })
  //     : clearInterval(fadeOut)
  //   }, 100)
  // }

  handleTabClick = (tab) => {
    this.setState({
      clickedTab: tab
    })
  }

  render() {
    const {organ, handleOrganClick} = this.props
    return (
      <div style={{opacity: this.state.organOpacity}}>
        <img
        className="organ-blowup" onClick={() => handleOrganClick(organ)} alt={organ.organ} src={organ.image}/>
        <div className="tab" >{
          organ.tabs.map(
            tab => <OrganTab handleTabClick={this.handleTabClick}  clicked={
                this.state.clickedTab === tab.name
                ? "active"
                : "inactive"
                }
                organ={organ} tabName={tab.name} key={tab.name} />
          )}
          </div>
          {this.state.clickedTab
          ? <div id={organ.id} className="tabcontent">

              <p>{organ.tabs.find(tab => tab.name === this.state.clickedTab).content} </p>
            </div>
          :null}

      </div>
    );
  }
}

export default Organ
