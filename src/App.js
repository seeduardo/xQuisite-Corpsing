import React, { Component } from 'react';
import './App.css';
import FloatingMan from './FloatingMan'
import Organ from './Organ';
import EasterEgg from './EasterEgg'

class App extends Component {

  state = {
    organIsClicked: false,
    clickedOrgan: ''
  }

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
          ? (
            this.state.clickedOrgan.id === 17
            ? <EasterEgg organ={this.state.clickedOrgan} handleOrganClick={this.handleOrganClick}/>
            : <Organ organ={this.state.clickedOrgan} handleOrganClick={this.handleOrganClick}/>
            )
          : <FloatingMan handleOrganClick={this.handleOrganClick}/>
        }
      </div>
    );
  }
}

export default App;
