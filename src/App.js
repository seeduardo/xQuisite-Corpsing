import React, { Component } from 'react';
import './App.css';
import FloatingMan from './FloatingMan'
import Organ from './Organ'

// let fadeEffect;

class App extends Component {

  state = {
    organIsClicked: false,
    clickedOrgan: ''
  }

  // fadeEffect = setInterval(() => {
  //   let clickedOrgan = this.state.clickedOrgan;
  //   if (clickedOrgan && !clickedOrgan.style.opacity) {
  //     clickedOrgan.style.opacity = 1
  //   } else if (clickedOrgan && clickedOrgan.style.opacity < 0.1) {
  //     clearInterval(fadeEffect)
  //   } else if (clickedOrgan) {
  //     clickedOrgan.style.opacity -= 0.05
  //   }
  // }, 1000)

  handleOrganClick = (organ) => {
    let clickedOrgan = organ;
    this.setState({
      organIsClicked: !this.state.organIsClicked,
      clickedOrgan: clickedOrgan
    })

  }

  render() {
    return (
      <div className="App">
        {
          this.state.organIsClicked
          ? <Organ organ={this.state.clickedOrgan} handleOrganClick={this.handleOrganClick}/>
          : <FloatingMan handleOrganClick={this.handleOrganClick}/>
        }
      </div>
    );
  }
}

export default App;
