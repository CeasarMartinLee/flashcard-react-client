import React from 'react'
import './flashcard.css'


class FlashCardFront extends React.Component {
    render() {
      console.log(this.props.flashcard)
      return(
        <div className='card-side side-front'>
                <img alt='flashcardpic' src={this.props.flashcard.picture}/>
        </div>
      )
    }
  }

export default (FlashCardFront);
