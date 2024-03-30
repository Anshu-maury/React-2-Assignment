import { useState } from "react";
import "../index.css"
function Card() {
    const [counter,setCounter] = useState(0);
    return(
        <div className="card"> 
        <h1 className="number">{counter}</h1>
            <button className="btn1" onClick={() => setCounter(counter+1)}>Increment</button>
            <button className="btn2" onClick={() =>setCounter(counter-1)}>Decrement</button>
        </div>
    )
}
export default Card;