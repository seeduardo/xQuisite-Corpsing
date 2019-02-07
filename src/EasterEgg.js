import React, { Component } from 'react';

const url = 'http://localhost:3000/api/v1/'

class EasterEgg extends Component {

  state = {
    organOpacity: 0,
    submittedName: false,
    nameInput: '',
    poemInput: '',
    emailInput: '',
    firstLines: []
  }

  componentDidMount() {
    let fadeIn = setInterval(() => {this.state.organOpacity <= 1
      ? this.setState({
        organOpacity: this.state.organOpacity + 0.008
        })
      : clearInterval(fadeIn)
    }, 20);
    fetch(`${url}first_lines/`)
      .then(resp => resp.json())
      .then(firstLinesData => this.handleFirstLines(firstLinesData))
  }

  handleFirstLines = firstLinesData => {
    let firstLines = firstLinesData;
    return this.setState({
      firstLines: firstLines
    })
  }

  fadeOut = () => {
    let fadeOut = setInterval(() => {this.state.organOpacity > 0
      ? this.setState({
        organOpacity: this.state.organOpacity - 0.008
        })
      : clearInterval(fadeOut)
    }, 20)
  }

  handleOrganBlowupClick = () => {
    this.fadeOut();
    setTimeout(() => {
      this.props.handleOrganClick(this.props.organ)
    }, 2500)
  }

  handleNameInputChange = (event) => {
    this.setState({
      nameInput: event.target.value
    });
  }

  handlePoemInputChange = (event) => {
    this.setState({
      poemInput: event.target.value
    });
  }

  handleNameSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submittedName: true
    })
  }

  handlePoemSubmit = (event) => {
    event.preventDefault();
    fetch(`${url}later_lines/`, {
      method: 'POST',
    	headers: {'Content-Type': 'application/json'},
    	body: JSON.stringify({
    		text: this.state.poemInput,
    		author: this.state.nameInput,
    		email: this.state.emailInput,
    		line_number: this.state.firstLines[0].id + 1,
    		first_line_id: this.state.firstLines[0].id
      })
    })
  }

  render() {
    const {organ} = this.props
    return (
      <div style={{opacity: this.state.organOpacity}}>
        <img
        className="organ-blowup" onClick={this.state.organOpacity >= 1
          ? this.handleOrganBlowupClick
          : null
          } alt={organ.organ} src={organ.image}/>
        {
          !this.state.submittedName
          ? <form onSubmit={this.handleNameSubmit}>
              <label className="form-input" >On the one hand, click above to go back. On the other hand, you can participate in x-Quisite Corpsing by entering your name <input placeholder="here" type="text" onChange={this.handleNameInputChange} /> and then clicking
              </label>
                <input type="submit" value="here" />
            </form>
          : <form onSubmit={this.handlePoemSubmit}>
              <label className="form-input" >As a prospective x-Quisite Corpser, you have come to the right place, oh {this.state.nameInput} - and furthermore, just at the right time. Contra Freud, anatomy is not destiny, so how do you respond to the following poetic accusation?<hr/> {this.state.firstLines[0].text} <hr/> Wax lyrical in response <input placeholder="here" type="text" onChange={this.handlePoemInputChange} /> and then click
              </label>
                <input type="submit" value="here" />
            </form>
        }
      </div>
    );
  }
}

export default EasterEgg
