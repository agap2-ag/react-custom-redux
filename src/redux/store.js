import { reducer } from './reducer'
// import { createStore } from 'redux'
// uncomment the function above and comment the one below
// in order to use the default Redux

export function createStore (reducer, initialState) {
  let state = initialState
  const listeners = []

  const getState = () => state

  const dispatch = action => {
    state = reducer(state, action)
    // each action execution calls the subscribed listener
    listeners.forEach(l => l())
  }

  const subscribe = listener => listeners.push(listener)

  return {
    // keys not needed: names are the same
    getState,
    dispatch,
    subscribe
  }
}

export const store = createStore(reducer, { messages: [] })
