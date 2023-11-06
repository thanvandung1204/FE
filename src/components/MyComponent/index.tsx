import React from "react";
import { RootState, useAppDispatch } from "../../store/store";
import { useAppSelector } from "../../store/hook";
import { decrement, increment } from "../../store/slices/Counter/counter.slice";

type Props = {};

const MyComponent = (props: Props) => {
  const dispatch = useAppDispatch();
  const { quantity } = useAppSelector((state: RootState) => state.counter);
  return (
    <div>
      <div>MyComponent</div>
      <div className="flex gap-x-4">
        <button className="bg-blue-400" onClick={() => dispatch(increment(1))}>
          Increment
        </button>
        <span>{quantity}</span>
        <button className="bg-red-400" onClick={() => dispatch(decrement(1))}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
