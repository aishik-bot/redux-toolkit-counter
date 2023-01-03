import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/CounterSlice";

function Counter() {
    const count = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();
    const dispatchIncrement = ()=>{
        dispatch(increment());
    };
    const dispatchDecrement = ()=>{
        dispatch(decrement());
    };
    const dispatchReset = ()=>{
        dispatch(reset());
    };
    return (
        <div className="counter-container">
            <h1>{count}</h1>
            <button className="btn" id="btn-dec" onClick = {dispatchDecrement}>-</button>
            <button className="btn" id="btn-reset" onClick = {dispatchReset}>Reset</button>
            <button className="btn" id="btn-inc" onClick = {dispatchIncrement}>+</button>
        </div>
        
    )
}

export default Counter;