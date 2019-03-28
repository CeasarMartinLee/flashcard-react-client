import request from 'superagent'

export const FLASHCARDS_FETCHED = 'FLASHCARDS_FETCHED'

const baseUrl = 'http://localhost:4000'

const flashcardsFetched = flashcards => ({
  type: FLASHCARDS_FETCHED,
  payload: flashcards
})

export const loadFlashcards = () => (dispatch) => {

  request(`${baseUrl}/flashcards`)
    .then(response => {
      console.log(response.body, 'response')
      dispatch(flashcardsFetched(response.body))
    })
    .catch(console.error)
}
