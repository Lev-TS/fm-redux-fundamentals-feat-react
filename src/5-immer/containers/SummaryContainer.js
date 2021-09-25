import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import { selectSubTotal, selectTipAmount, selectTotal } from '../selectors';

const mapStateToProps = (state) => {
	
	// const items = state.items;
	// const subtotal = items.reduce(
	// 	(sum, item) => sum + item.price * item.quantity,
	// 	0
	// );
	// const tipAmount = subtotal * (state.tipPercentage / 100);
	// const total = subtotal + tipAmount;

	// this is the alternative to above
	const subtotal = selectSubTotal(state);
	const tipAmount = selectTipAmount(state);
	const total = selectTotal(state);

	return {
		subtotal,
		tipAmount,
		total,
	};
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
