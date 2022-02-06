import { useSelector, useDispatch} from "react-redux"; 
import { increment, decrement } from "./counterSlice"

const Counter1 = () => {

    const count = useSelector((state) => state.mycount.count)

    const dispatch = useDispatch();
    console.log(count)
  return <>
  
    <button onClick={()=> {dispatch(increment)}} >+</button>

    <span>Count: { count }</span>
    <button onClick={()=> {dispatch(decrement)}} >-</button>
  </>;
};

export default Counter1;
