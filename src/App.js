import React, { Component } from 'react';
import './App.css';
import FloatingMan from './FloatingMan'
import Organ from './Organ'

class App extends Component {

  state = {
    organClicked: false
  }

  handleOrganClick = (organ) => {
    alert(organ.organ)
  }

  render() {
    return (
      <div className="App">
        {
          this.state.organClicked
          ? <Organ />
          : <FloatingMan handleOrganClick={this.handleOrganClick}/>
        }
      </div>
    );
  }
}

export default App;
