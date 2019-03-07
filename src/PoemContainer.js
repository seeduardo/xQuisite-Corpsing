import React, { Component } from 'react';
import Poem from './Poem'

const apiBaseUrl = 'https://xquisite-corpsing.herokuapp.com/api/v1/'

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
    }, 18);
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
    }, 2000)
  }

  fadeOut = () => {
    let fadeOut = setInterval(() => {this.state.poemContainerOpacity > 0
      ? this.setState({
        poemContainerOpacity: this.state.poemContainerOpacity - 0.01
        })
      : clearInterval(fadeOut)
    }, 18)
  }

  render() {
    const {organ} = this.props
    return(
      <div style={{opacity: this.state.poemContainerOpacity, marginTop: "2vh"}}>
        <div>
          <figure>
            <figcaption>Image by Jacques Fabien Gautier d'Agoty, courtesy of the Wellcome Collection</figcaption>
            <img
            className="organ-blowup" onClick={this.state.poemContainerOpacity >= 1
              ? this.handleOrganBlowupClick
              : null
              } alt={organ.organ} src={organ.image}/>
          </figure>
          <div className="poem-list">A fine discovery you have made, oh xQuisite xPlorer.... Here is a list of all the xQuisite Corpses generated up till now. The first line of each creation was evoked from the mystery of the ether, but the remaining lines were forged by the mentioned xQuisite Corpseers respectively.</div>
          {this.state.allLines.map(
          poem => <Poem poem={poem} key={poem.id}/>
          )}
        </div>
      </div>
    )
  }
}

export default PoemContainer
