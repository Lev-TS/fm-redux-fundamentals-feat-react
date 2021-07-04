import { connect } from 'react-redux';
import { removeItem, updatePrice, updateQuantity } from '../store/items/action';
import { bindActionCreators } from 'redux';
import MenuItem from '../components/MenuItem';

const mapDispatchToProps = (dispatch, ownProps) => {
	return bindActionCreators(
		{
			remove: () => removeItem(ownProps.uuid),
			updatePrice: (price) => updatePrice(ownProps.uuid, price),
			updateQuantity: (quantity) => updateQuantity(ownProps.uuid, quantity)
		},
		dispatch
	);
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
