// redux contians only five APIs,
// of which createStore contains 5 more
const {
	createStore,
	compose,
	applyMiddleware,
	bindActionCreators,
  combineReducers
} = require('redux');

const initialState = { value: 0}
const reducer = (state = initialState, action) => state

// it should take one reducer (and optional middleware)

const store = createStore(reducer);

console.log(store)
/* returns
  {
  dispatch: [Function: dispatch],
  subscribe: [Function: subscribe],
  getState: [Function: getState],
  replaceReducer: [Function: replaceReducer],
  '@@observable': [Function: observable]
  }
*/

console.log(store.getState()) // returns {value: 0}

