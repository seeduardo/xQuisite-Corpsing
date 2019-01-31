import React, { Component } from 'react';
import './App.css';
import FloatingMan from './FloatingMan'
import Organ from './Organ'

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
          ? <Organ organ={this.state.clickedOrgan} handleOrganClick={this.handleOrganClick}/>
          : <FloatingMan handleOrganClick={this.handleOrganClick}/>
        }
      </div>
    );
  }
}

export default App;
