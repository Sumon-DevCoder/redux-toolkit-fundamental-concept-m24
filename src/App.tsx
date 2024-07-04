import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center mt-5 gap-5">
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-400 p-2 rounded-lg"
      >
        Decrement
      </button>
      <h1 className="text-3xl font-bold">{count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="bg-green-400 p-2 rounded-lg"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(incrementByValue(5))}
        className="bg-green-400 p-2 rounded-lg"
      >
        Increment By Value
      </button>
    </div>
  );
};

export default App;
