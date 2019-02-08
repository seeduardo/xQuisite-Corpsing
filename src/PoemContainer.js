import React, { Component } from 'react';

class PoemContainer extends Component {

  state = {
    poemContainerOpacity: 0
  }

  componentDidMount() {
    let fadeIn = setInterval(() => {this.state.poemContainerOpacity <= 1
      ? this.setState({
        poemContainerOpacity: this.state.poemContainerOpacity + 0.008
        })
      : clearInterval(fadeIn)
    }, 20);
  }

  click = () => {
    this.setState({
      poemContainerOpacity: 0
    })
  }

  render() {
    return(
      <h1 style={{opacity: this.state.poemContainerOpacity}} onClick={this.click} className="form-input">PoemContainer YO!</h1>
    )
  }
}

export default PoemContainer
