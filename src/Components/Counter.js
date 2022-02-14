import { useSelector, useDispatch } from "react-redux";
import { change_count } from "../Redux/count/countSlice";

function Counter() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  const changeCount = (num) => {
    let newCount = count + num;
    dispatch(
      change_count({
        count: newCount,
      })
    );
  };
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count}</h3>
      <button
        onClick={() => {
          changeCount(1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          changeCount(-1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
