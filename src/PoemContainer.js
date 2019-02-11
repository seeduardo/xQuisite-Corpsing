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

  render() {
    const {organ} = this.props
    return(
      <div style={{opacity: this.state.organOpacity}}>
        <div>
          <img
          className="organ-blowup" onClick={this.state.organOpacity >= 1
            ? this.handleOrganBlowupClick
            : null
            } alt={organ.organ} src={organ.image}/>
        </div>
        <h1 style={{opacity: this.state.poemContainerOpacity}}  className="poem-container">PoemContainer YO!</h1>
        {this.state.allLines.map(
          poem => <Poem poem={poem} key={poem.id}/>
        )
        }
      </div>
    )
  }
}

export default PoemContainer
