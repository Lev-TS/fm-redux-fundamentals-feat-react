import { createSelector } from 'reselect';

// sort of useSelector() hook which gives us the part of the state we need
// the good think is that it is very inexpensive computation and we are
// memoizing the state so that if nothing changes we do not update.
// so every time we need the subtotal this will do the math only once until,
// the array of items changes.

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;
export const selectItem = (state, props) => {
	return state.items.find((item) => item.uuid === props.uuid);
};


export const selectSubTotal = createSelector([selectItems], (items) =>
	items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
	[selectSubTotal, selectTipPercentage],
	(subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
	[selectSubTotal, selectTipAmount],
	(subtotal, tipAmount) => subtotal + tipAmount
);

export const selectItemTotal = createSelector(
	[selectItem],
	(item) => item.price * item.quantity
);
