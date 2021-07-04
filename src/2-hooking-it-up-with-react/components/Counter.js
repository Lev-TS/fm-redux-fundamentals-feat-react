import { SetCounter } from './SetCounter';
import { useCounter } from '../redux/counter/custom-hooks/use-counter';
export const Counter = () => {
	const incident = 'Incident';
	
  // option 1: no custom hooks (don't forget to import what it need)
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();
  // const actions = bindActionCreators({increment, decrement, set}, dispatch)

  // option 2: custom hooks for actions (don't forget to import what it need)
  // const count = useSelector((state) => state.count);
	// const actions = useActions({increment, decrement, set})

  // option 3: move the whole counter to the custom hook; 
  const { count, increment, decrement, set } = useCounter();

	return (
		<main className="Counter">
			<h1>Days Since Last {incident}</h1>
			<p className="count">{count}</p>
			<section className="controls">
				<button onClick={() => increment()}>Increment</button>
				<button onClick={() => set(0)}>Reset</button>
				<button onClick={() => decrement()}>Decrement</button>
				<SetCounter />
			</section>
		</main>
	);
};

export default Counter;
