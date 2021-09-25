import { NewItemForm } from '../components/NewItemForm';
import { connect } from 'react-redux';
import { addNewItem } from '../store/items/action';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch, ownProps) => {
	return bindActionCreators(
		{
			onSubmit: (name, price) => addNewItem(name, price),
		},
		dispatch
	);
};

// if we have a very simple object and we don't need to
// manuoulate anything in the function we can simpy pass
// an object instead of doing above. It will automatically
// bind action creators
// const mapDispatchToProps = {
// 	onSubmit: (name, price) => addNewItem(name, price),
// };

export const NewItemFormContainer = connect(
	null,
	mapDispatchToProps
)(NewItemForm);
