import React, { Component } from 'react';
import PoemContainer from './PoemContainer'

const apiBaseUrl = 'http://localhost:3000/api/v1/'

class EasterEgg extends Component {

  state = {
    organOpacity: 0,
    submittedName: false,
    submittedPoemLine: false,
    submittedAllData: false,
    nameInput: '',
    poemInput: '',
    emailInput: '',
    poemPrompt: {}
  }

  componentDidMount() {
    let fadeIn = setInterval(() => {this.state.organOpacity <= 1
      ? this.setState({
        organOpacity: this.state.organOpacity + 0.008
        })
      : clearInterval(fadeIn)
    }, 20);
    fetch(`${apiBaseUrl}first_lines`)
      .then(resp => resp.json())
      .then(firstLineData => this.handleFirstLine(firstLineData))
  }

  handleFirstLine = firstLineData => {
    let firstLine = firstLineData;
    return this.setState({
      poemPrompt: firstLine
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

  handleEmailInputChange = (event) => {
    this.setState({
      emailInput: event.target.value
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
    this.setState({
      submittedPoemLine: true
    })
  }

  handleEmailSubmit = (event) => {
    event.preventDefault();
    this.fadeOut();
    let firstLineId = this.state.poemPrompt.first_line_id
      ? this.state.poemPrompt.first_line_id
      : this.state.poemPrompt.id
    fetch(`${apiBaseUrl}later_lines`, {
      method: 'POST',
    	headers: {'Content-Type': 'application/json'},
    	body: JSON.stringify({
    		text: this.state.poemInput,
    		author: this.state.nameInput,
    		email: this.state.emailInput,
    		line_number: firstLineId + 1,
    		first_line_id: firstLineId
      })
    })
      .then(this.fadeOut())
      .then(
        setTimeout(() => {
          this.setState({
            submittedAllData: true
          })
        }, 1200)
      )
  }

  render() {
    const {organ} = this.props
    return (
      !this.state.submittedAllData
        ? (<div style={{opacity: this.state.organOpacity}}>
          <img
          className="organ-blowup" onClick={this.state.organOpacity >= 1
            ? this.handleOrganBlowupClick
            : null
            } alt={organ.organ} src={organ.image}/>
          {
              !this.state.submittedPoemLine
                ? (!this.state.submittedName
                  ? <form onSubmit={this.handleNameSubmit}>
                      <label className="form-input" >On the one hand, click above to go back. On the other hand, you can participate in x-Quisite Corpsing by entering your name <input placeholder="here" type="text" onChange={this.handleNameInputChange} /> and then clicking
                      </label>
                        <input type="submit" value="here" />
                    </form>
                  : <form onSubmit={this.handlePoemSubmit}>
                      <label className="form-input" >As a prospective x-Quisite Corpser, you have come to the right place, oh {this.state.nameInput} - and furthermore, just at the right time. Contra Freud, anatomy is not destiny, so how do you respond to the following poetic accusation?<hr/> {this.state.poemPrompt.text} <hr/> Wax lyrical in response <input placeholder="here" type="text" onChange={this.handlePoemInputChange} /> and then click
                      </label>
                        <input type="submit" value="here" />
                    </form>)
                  : <form onSubmit={this.handleEmailSubmit}>
                      <label className="form-input" >Many thanks to you, wise and judicious {this.state.nameInput}, your poetic prowess has been noted and stored. Once sufficient respondents have contributed to the poem for which they will ultimately share creative responsibility with you, the completed x-Quisite Corpse will be published here.  However, should you wish to receive your own body text via the new organ of communication, please enter your email address <input placeholder="here" type="email" onChange={this.handleEmailInputChange} />. But it's really up to you, it's your life. Whether or not you've chosen to furnish your email, you should probably then click <input type="submit" value="here" />, or this could end up a very long day. Finally, alternatively, if in a moment of sudden pique and madness you'd prefer to scrap all your answers and return to the home page, feel free to click on the welcoming hand of doom above.
                      </label>
                    </form>

              }
        </div>)
      : <PoemContainer/>
    );
  }
}

export default EasterEgg
