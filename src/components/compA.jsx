import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, addOne, Dec } from "../features/counter/coinSlice";

const CompA = () => {
  const data = useSelector((state) => state.coinReducer.mycoin);

  const dispatch = useDispatch();
  return (
    <>
      <p>useSelector to get the data from store</p>
      <span>{data}</span>

      <div>
        <button onClick={() => dispatch(add(10))}>Add 10 items</button>
        <button onClick={() => dispatch(addOne())}>Increment</button>
        <button onClick={() => dispatch(Dec())}>Decrement</button>
      </div>
    </>
  );
};

export default CompA;
