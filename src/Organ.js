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
        organOpacity: this.state.organOpacity + 0.008
        })
      : clearInterval(fadeIn)
    }, 18)
  }

  fadeOut = () => {
    let fadeOut = setInterval(() => {this.state.organOpacity > 0
      ? this.setState({
        organOpacity: this.state.organOpacity - 0.01
        })
      : clearInterval(fadeOut)
    }, 18)
  }

  handleTabClick = (tab) => {
    this.setState({
      clickedTab: tab
    })
  }

  handleOrganBlowupClick = () => {
    this.fadeOut();
    setTimeout(() => {
      this.props.handleOrganClick(this.props.organ)
    }, 2000)
  }

  render() {
    const {organ} = this.props
    return (
      <div style={{opacity: this.state.organOpacity, marginTop: "1vh"}}>
        <figure>
          <figcaption>Image by Jacques Fabien Gautier d'Agoty, courtesy of the Wellcome Collection</figcaption>
          <img
          className="organ-blowup" onClick={this.state.organOpacity >= 1
            ? this.handleOrganBlowupClick
            : null
          } alt={organ.organ} src={organ.image}/>
        </figure>
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
            // (this.state.clickedTab === "The Body Text"
            //   ? <div id={organ.id} className="tabcontent">
            //       <pre
            //       className={
            //           this.state.clickedTab
            //           ? "active"
            //           : "inactive"
            //           }
            //       >{organ.tabs.find(tab => tab.name === this.state.clickedTab).content} </pre>
            //     </div>
            //   :
            ? <div id={organ.id} className="tabcontent">
                  <p
                  className={
                      this.state.clickedTab
                      ? "active"
                      : "inactive"
                      }
                  >{organ.tabs.find(tab => tab.name === this.state.clickedTab).content} </p>
              </div>
            :null}

      </div>
    );
  }
}

export default Organ
