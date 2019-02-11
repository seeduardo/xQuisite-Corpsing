import React, { Component } from 'react';
import Poem from './Poem'

const apiBaseUrl = 'http://localhost:3000/api/v1/'

class PoemContainer extends Component {

  state = {
    poemContainerOpacity: 0,
    allLines: []
  }

  componentDidMount() {
    let fadeIn = setInterval(() => {this.state.poemContainerOpacity <= 1
      ? this.setState({
        poemContainerOpacity: this.state.poemContainerOpacity + 0.008
        })
      : clearInterval(fadeIn)
    }, 20);
    fetch(`${apiBaseUrl}later_lines`)
      .then(resp => resp.json())
      .then(allLinesData => this.handleAllLinesData(allLinesData))
  }

  handleAllLinesData = allLinesData => {
    let allLines = allLinesData;
    this.setState({
      allLines: allLines
    })
  }

  handleOrganBlowupClick = () => {
    this.fadeOut();
    setTimeout(() => {
      this.props.handleOrganClick(this.props.organ)
    }, 2500)
  }

  fadeOut = () => {
    let fadeOut = setInterval(() => {this.state.poemContainerOpacity > 0
      ? this.setState({
        poemContainerOpacity: this.state.poemContainerOpacity - 0.008
        })
      : clearInterval(fadeOut)
    }, 20)
  }

  render() {
    const {organ} = this.props
    return(
      <div style={{opacity: this.state.poemContainerOpacity}}>
        <div>
          <img
          className="organ-blowup" onClick={this.state.poemContainerOpacity >= 1
            ? this.handleOrganBlowupClick
            : null
            } alt={organ.organ} src={organ.image}/>
        {this.state.allLines.map(
          poem => <Poem poem={poem} key={poem.id}/>
          )}
        </div>
      </div>
    )
  }
}

export default PoemContainer
