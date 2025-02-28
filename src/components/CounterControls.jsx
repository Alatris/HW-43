import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement} from "../Store/counterSlice.jsx";

const CounterControls = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Скинути</button>

        </div>
    );
};

export default CounterControls;
