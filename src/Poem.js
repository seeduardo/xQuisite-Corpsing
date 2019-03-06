import React, { Component } from 'react';

class Poem extends Component {

  render() {
    const {poem} = this.props
    return(
      poem.later_lines.length === 9
        ? <div className="poem">
            <div className="poem-details">xQuisite Corpseers: </div><br/>
            <p> {poem.later_lines.map(
                (laterLine, index) => {return index < poem.later_lines.length - 2 ? laterLine.author + ', ' : (index === poem.later_lines.length - 2 ? laterLine.author + ' and ' : laterLine.author + '.')}
            )} </p>
            <div className="poem-details">xQuisite Corpse: </div><br/>
            <p>{poem.text}</p>
              {poem.later_lines.map(
                  laterLine => <p key={laterLine.id}>{laterLine.text}</p>
              )}
          </div>
        : null
    )
  }
}

export default Poem
