export function reducer (state, action) {
  // state: {messages:[]}
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: state.messages.concat(action.message) // concat does not mutate the array
      }
    case 'DEL_MESSAGE':
      return { messages: state.messages.filter((m, i) => action.idx !== i) }
    default:
      return state
  }
}
