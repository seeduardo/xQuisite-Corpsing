import React, { Component } from 'react';

class Poem extends Component {

  render() {
    return(
      <div className="poem">
        {this.props.poem.text}
        {this.props.poem.later_lines.map(
          laterLine => <p>{laterLine.text}</p>
        )}
        <hr/>
      </div>
    )
  }
}

export default Poem
