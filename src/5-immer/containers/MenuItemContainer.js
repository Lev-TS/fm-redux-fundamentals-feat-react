import { connect } from 'react-redux';
import { removeItem, updatePrice, updateQuantity } from '../store/items/action';
import { bindActionCreators } from 'redux';
import MenuItem from '../components/MenuItem';
import { selectItemTotal } from '../selectors';

const mapStateToProps = (state, ownProps) => ({
	total: selectItemTotal(state, ownProps),
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return bindActionCreators(
		{
			remove: () => removeItem(ownProps.uuid),
			updatePrice: (price) => updatePrice(ownProps.uuid, price),
			updateQuantity: (quantity) => updateQuantity(ownProps.uuid, quantity),
		},
		dispatch
	);
};

export const MenuItemContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuItem);
