import React from 'react'
import {loadFlashcards} from '../actions/flashcards'
import {connect} from 'react-redux'
import FlashCardFront from './FlashCardFront'
import FlashCardBack from './FlashCardBack'
import './flashcard.css'

class FlashcardContainer extends React.Component {
  componentDidMount() {
    this.props.loadFlashcards()
  }


  render() {
    console.log(this.props, 'statetoprops')
    // console.log(this.state)
    if (!this.props.flashcards) return null
    return (
      <div className='card-container'>
        {this.props.flashcards.map(flashcard=>(
            <FlashCardFront flashcard={flashcard}/>     
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  flashcards: state.flashcards,
})

export default connect(mapStateToProps, {loadFlashcards})(FlashcardContainer)
