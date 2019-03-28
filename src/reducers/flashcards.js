import {FLASHCARDS_FETCHED} from '../actions/flashcards'

export default (state = null, action = {}) => {


  switch(action.type) {
    case FLASHCARDS_FETCHED :
    console.log(action.payload, 'reducer')
      return action.payload.flashcards

    default :
      return state
  }
}
