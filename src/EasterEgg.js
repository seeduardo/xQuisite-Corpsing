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
    formErrors: {name: '', 'response': '', email: ''},
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
        nameInputValid = value.length >= 1 && value.length <= 12;
        fieldValidationErrors.name = nameInputValid ? '' : ` isn't really the right length yet, wouldn't you say?`;
        break;
      case 'poemInput':
        poemInputValid = value.length >= 1 && value.length <= 60;
        fieldValidationErrors['response'] = poemInputValid ? '': `, however poetic, is a touch on the short (maybe even long) side, n'est-ce pas?`;
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
    this.setState({
      submittedAllData: true
    });
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
      .then(() => formSubmissionDelay = setTimeout(() => {
            this.handleOrganBlowupClick()
          }, 15000)
        )
  }

  render() {
    const {organ} = this.props
    return (
      <div style={{opacity: this.state.organOpacity, marginTop: "2vh"}}>
        <div>
          <figure>
            <figcaption>Image by Jacques Fabien Gautier d'Agoty, courtesy of the Wellcome Collection</figcaption>
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
          </figure>
        </div>
        {!this.state.submittedAllData
          ? (!this.state.submittedPoemLine
            ? (!this.state.submittedName
              ? <form autoComplete="off" onSubmit={this.handleNameAndPoemSubmit} name="submittedName">
                  <label className="form-input" >Welcome. You have stumbled upon the true core of xQuisite Corpsing, an activity based upon mystical ancient lore (well, <a target="_blank" and rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Exquisite_corpse">sort of</a>).<br/><br/>On the one hand, you could now click the bony finger in the image above to go back, and just continue exploring the body. On the other hand, participate in xQuisite Corpsing by entering your name <input placeholder=" in this box" type="text" onChange={this.handleInputChange} name="nameInput"/> and then clicking <input type="submit" value="here" disabled={!this.state.nameInputValid}/>. Fancy taking the chance? Do you dare?<br/><br/>
                  <FormErrors formErrors={this.state.formErrors} />
                  </label>
                </form>
              : <form autoComplete="off" onSubmit={this.handleNameAndPoemSubmit} name="submittedPoemLine">
                  <label className="form-input" >As a prospective xQuisite Corpseer, oh {this.state.nameInput}, you have come to the right place at just the right time. Contra Freud, anatomy is not destiny, so what do you make of the following poetic prompt?<hr/> <h3>"{this.state.poemPrompt.text}"</h3> <FormErrors formErrors={this.state.formErrors} /><hr/> Get creative, wax lyrical and respond however you like to the above line of poetry by typing <input placeholder=" in this box" type="text" onChange={this.handleInputChange} name="poemInput"/> - then click <input type="submit" value="here" disabled={!this.state.poemInputValid}/>. Your response, along with the response to your response, along with the next and so on, will altogether contribute to the creation of a collaborative but mostly unseen poetic instance, known forever more as an xQuisite Corpse.<br/>

                  </label>
                </form>)
            : <form autoComplete="off" onSubmit={this.handleEmailSubmit}>
                <label className="form-input" >Many thanks to you, wise and judicious {this.state.nameInput}, your poetic prowess has been noted and stored. Once sufficient respondents have contributed to the poem for which they will ultimately share creative responsibility with you, the completed xQuisite Corpse will be published here (though you will have to scour these pages once again for the precise location). However, should you wish to receive your own body text via the new organ of communication - as well as a clue to the published poem's location on this site - please enter your email address <input placeholder="here" type="email" onChange={this.handleInputChange} name="emailInput"/>. But it's really up to you, it's your life. Whether or not you've chosen to furnish your email, you should probably then click <input type="submit" value="here" disabled={!this.state.formValid}/>, or this could end up a very long day. <br/><br/><FormErrors formErrors={this.state.formErrors} /><br/>Finally, alternatively, if in a moment of sudden pique and madness you'd prefer to scrap all your answers and return to the home page, feel free to click on the welcoming hand of doom above.
                </label>
              </form>)
          : <p className="poem">
              Praise be unto you, venerable {this.state.nameInput}, for your contribution to the poetic majesty of this otherwise callous existence. As mentioned, your offering will appear somewhere on this site once contributions have reached the sacred number, and if you (correctly) entered your email, you will receive it that way at that point also. In the meantime, giving the hand above the old skeletal high five with your cursor (that is, clicking on it) will take you to the home page so that your exploration of the body may continue to please, tease and appease you....
            </p>}

      </div>
    );
  }
}

export default EasterEgg
