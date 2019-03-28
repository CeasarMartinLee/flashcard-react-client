import React from 'react'

class CardFront extends React.Component {
    render() {
      console.log(this.props.flashcard)
      return(
        <div className='card-side side-front'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-6'>
                <img alt='flashcardpic' src={this.props.flashcard.picture}/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default (CardFront);
