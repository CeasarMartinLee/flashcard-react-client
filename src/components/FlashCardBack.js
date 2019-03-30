import React from 'react'
import './flashcard.css'


class FlashCardBack extends React.Component {


    render() {
      console.log(this.props.flashcard)
      return(
        <div className='card-side side-back'>
          <h1>{this.props.flashcard.answer.charAt(0).toUpperCase()}{this.props.flashcard.answer.charAt(0)}</h1>
          <h2>{this.props.flashcard.answer}</h2>
        </div>
      )
    }
  }

export default (FlashCardBack);
