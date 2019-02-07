import React, { Component } from 'react';

class EasterEgg extends Component {

  state = {
    organOpacity: 0,
    submittedName: false,
    nameInput: ''
  }

  componentDidMount() {
    let fadeIn = setInterval(() => {this.state.organOpacity <= 1
      ? this.setState({
        organOpacity: this.state.organOpacity + 0.008
        })
      : clearInterval(fadeIn)
    }, 20)
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

  handleChange = (event) => {
    this.setState({
      nameInput: event.target.value
    });
  }

  handleNameSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submittedName: true
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
              <label className="form-input" >On the one hand, click above to go back. On the other hand, you can participate in x-Quisite Corpsing by entering your name <input placeholder="here" type="text" value={this.state.value} onChange={this.handleChange} /> and then clicking
              </label>
                <input type="submit" value="here" />
            </form>
          : <form onSubmit={this.handlePoemSubmit}>
              <label className="form-input" >As a prospective x-Quisite Corpser, you have come to the right place, oh {this.state.nameInput} - and furthermore, just at the right time. Contra Freud, anatomy is not destiny, so how do you respond to the following poetic accusation?<hr/> {organ.poemPrompts[0]} <hr/> Wax lyrical in response <input placeholder="here" type="text" value={this.state.value} onChange={this.handleChange} /> and then click
              </label>
                <input type="submit" value="here" />
            </form>
        }
      </div>
    );
  }
}

export default EasterEgg
