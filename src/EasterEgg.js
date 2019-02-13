import React, { Component } from 'react';
import FormErrors from './FormErrors'

const apiBaseUrl = 'http://localhost:3000/api/v1/'
let formSubmissionDelay

class EasterEgg extends Component {

  state = {
    organOpacity: 0,
    submittedName: false,
    submittedPoemLine: false,
    submittedAllData: false,
    nameInput: '',
    poemInput: '',
    emailInput: '',
    poemPrompt: {},
    formErrors: {name: '', 'line of poetry': '', email: ''},
    nameInputValid: false,
    poemInputValid: false,
    emailInputValid:false,
    formValid: false
  }

  componentDidMount() {
    let fadeIn = setInterval(() => {this.state.organOpacity <= 1
      ? this.setState({
        organOpacity: this.state.organOpacity + 0.008
        })
      : clearInterval(fadeIn)
    }, 18);
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
        organOpacity: this.state.organOpacity - 0.01
        })
      : clearInterval(fadeOut)
    }, 18)
  }

  handleOrganBlowupClick = () => {
    this.fadeOut();
    setTimeout(() => {
      this.props.handleOrganClick(this.props.organ)
    }, 2000)
  }

  handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({
      [field]: value
    },
      () => this.validateField(field, value)
    );
  }

  validateField(field, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameInputValid = this.state.nameInputValid;
    let poemInputValid = this.state.poemInputValid;
    let emailInputValid = this.state.emailInputValid;

    switch(field) {
      case 'nameInput':
        nameInputValid = value.length >= 1;
        fieldValidationErrors.name = nameInputValid ? '' : ` isn't really long enough yet, wouldn't you say?`;
        break;
      case 'poemInput':
        poemInputValid = value.length >= 1;
        fieldValidationErrors['line of poetry'] = poemInputValid ? '': ` is perhaps a little on the short side, n'est-ce pas?`;
        break;
      case 'emailInput':
        emailInputValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || value === '';
        fieldValidationErrors.email = emailInputValid ? '' : ` does not yet resemble a valid address, chum, so if you're going to bother joining in, make sure to do it properly.... Just saying.`;
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameInputValid: nameInputValid,
                    poemInputValid: poemInputValid,
                    emailInputValid: emailInputValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.nameInputValid && this.state.poemInputValid && this.state.emailInputValid
    });
  }

  handleNameAndPoemSubmit = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: true
    })
  }

  handleEmailSubmit = (event) => {
    event.preventDefault();
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
    		first_line_id: firstLineId
      })
    })
      .then(() =>
          this.setState({
            submittedAllData: true
          },
          () => formSubmissionDelay = setTimeout(() => {
            this.handleOrganBlowupClick()
          }, 10000))
        )
  }

  render() {
    const {organ} = this.props
    return (
      <div style={{opacity: this.state.organOpacity, marginTop: "2vh"}}>
        <div>
          <img
            className="organ-blowup" onClick={
              () => {
                clearTimeout(formSubmissionDelay);
                if (this.state.organOpacity >= 1) {
                  this.handleOrganBlowupClick()
                }
              }
            }
            alt={organ.organ}
            src={organ.image}/>
        </div>
        {!this.state.submittedAllData
          ? (!this.state.submittedPoemLine
            ? (!this.state.submittedName
              ? <form onSubmit={this.handleNameAndPoemSubmit} name="submittedName">
                  <label className="form-input" >On the one hand, click above to go back. On the other hand, you can participate in x-Quisite Corpsing by entering your name <input placeholder=" in this box" type="text" onChange={this.handleInputChange} name="nameInput"/> and then clicking <input type="submit" value="here" disabled={!this.state.nameInputValid}/>.<br/><br/>
                  <FormErrors formErrors={this.state.formErrors} />
                  </label>
                </form>
              : <form onSubmit={this.handleNameAndPoemSubmit} name="submittedPoemLine">
                  <label className="form-input" >As a prospective x-Quisite Corpser, you have come to the right place, oh {this.state.nameInput} - and furthermore, just at the right time. Contra Freud, anatomy is not destiny, so how do you respond to the following poetic accusation?<hr/> "{this.state.poemPrompt.text}" <hr/> You should now wax lyrical in response <input placeholder=" in this box" type="text" onChange={this.handleInputChange} name="poemInput"/> and then click <input type="submit" value="here" disabled={!this.state.poemInputValid}/>.<br/>
                  <FormErrors formErrors={this.state.formErrors} />
                  </label>
                </form>)
            : <form onSubmit={this.handleEmailSubmit}>
                <label className="form-input" >Many thanks to you, wise and judicious {this.state.nameInput}, your poetic prowess has been noted and stored. Once sufficient respondents have contributed to the poem for which they will ultimately share creative responsibility with you, the completed x-Quisite Corpse will be published here (though you will have to scour these pages once again for the precise location).  However, should you wish to receive your own body text via the new organ of communication - as well as a clue to the published poem's location on this site - please enter your email address <input placeholder="here" type="email" onChange={this.handleInputChange} name="emailInput"/>. But it's really up to you, it's your life. Whether or not you've chosen to furnish your email, you should probably then click <input type="submit" value="here" disabled={!this.state.formValid}/>, or this could end up a very long day. <br/><br/><FormErrors formErrors={this.state.formErrors} /><br/>Finally, alternatively, if in a moment of sudden pique and madness you'd prefer to scrap all your answers and return to the home page, feel free to click on the welcoming hand of doom above.
                </label>
              </form>)
          : <p className="poem">
              Praise be unto you, venerable {this.state.nameInput}, for your contribution to the poetic majesty of this otherwise callous existence. As mentioned, your offering will appear somewhere on this site once contributions have reached the sacred number, and if you (correctly) entered your email, you will receive it that way at that point also. In the meantime, may your exploration of the body continue to please, tease and appease you....
            </p>}

      </div>
    );
  }
}

export default EasterEgg
