
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {incNumber,decNumber} from "./actions/indexx";

function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
  <>
  <div class="container">
  <h1> Increment / Decrement Counter</h1>
  <h2> using React and Redux</h2>

  <div className="quantity">
  <button className="quantity_minus" title = "Dcerement" onClick={()=>dispatch(decNumber())}><span> - </span></button>
  <input class = "quantity" type = "text" className="quantity_input" value={myState} />
  <button className="quantity_plus" title = "Increment" onClick={()=>dispatch(incNumber())}><span> + </span></button>

</div>

</div>
    

    </>

 );
}

export default App;
