import { Card } from '@twilio-paste/core';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { SummaryContainer } from '../containers/SummaryContainer';

const Calculator = () => {
	return (
		<Card>
			<NewItemFormContainer />
			<MenuItemsContainer />
			<TipSelectContainer />
			<SummaryContainer />
		</Card>
	);
};

export default Calculator;
