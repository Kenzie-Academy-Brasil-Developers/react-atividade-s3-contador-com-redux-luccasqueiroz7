import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "../../store/modules/counter/actions";
import "./styles.css";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <>
      <h1>Contador com Redux</h1>
      <h2>{count}</h2>
      <div className="counters">
        <button onClick={() => dispatch(addCount(1))}>+</button>
        <button onClick={() => dispatch(subCount(1))}>-</button>
      </div>
    </>
  );
}

export default Counter;
