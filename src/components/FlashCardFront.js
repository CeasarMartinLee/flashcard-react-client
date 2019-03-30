import React from 'react'
import './flashcard.css'
import Speech from 'react-speech'


class FlashCardFront extends React.Component {

  
    render() {
      let style = {
        play: {
          button: {
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'white',
            position: 'absolute',
            width: '350px',
            height: '570px',
            opacity: 0
          },
        }
      }

      let text = this.props.flashcard.answer.charAt(0) + ", " + this.props.flashcard.answer

      console.log(this.props.flashcard)
      return(
        <div className='card-side side-front'>
          <Speech 
            styles={style}
            rate="0.8"
            textAsButton={false}
            text={text}
            voice="Google US English" 
            pitch="1"
            volume="1"
            />
          <img alt='flashcardpic' src={this.props.flashcard.picture}/>
        </div>
      )
    }
  }

export default (FlashCardFront);
