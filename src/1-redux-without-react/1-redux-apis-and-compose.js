// redux contians only five APIs,
// of which createStore contains 4 more
const {
	createStore,
	compose,
	applyMiddleware,
	bindActionCreators,
  combineReducers
} = require('redux');


function checkCompose() {
	const makeLouder = (string) => string.toUpperCase();
	const repeatThreeTimes = (string) => string.repeat(3);
	const embolden = (string) => string.bold();

	// compose is not specific to redux. It's a helper function
	// which calls multiple functions on a parameter.
	const compositeFunction_1 = compose(makeLouder, repeatThreeTimes, embolden);
	console.log(compositeFunction_1('Hello World'));

	// this is what compose is doing under the hood
	const compositeFunction_2 = (string) =>
		makeLouder(repeatThreeTimes(embolden(string)));
	console.log(compositeFunction_2('Hello World'));
}

checkCompose()

