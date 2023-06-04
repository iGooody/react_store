import React, {useState} from 'react'
import "./Button.css"
export default function Button() {
    const [count, setCount] = useState(1);
    const addCountHandler = () => {
      setCount(+count + 1);
    };
    const removeCountHandler = () => {
      if(count === 1){
        return;  
      }
      setCount(+count - 1);
    };
  return (
    <div className="product-actions">
        <button className="count-button" onClick={removeCountHandler}>-</button>
        <span className="item-count">{count}</span>
        <button className="count-button" onClick={addCountHandler}>+</button>
        <button className="add-to-basket-button">Add to Basket</button>
    </div>
  )
}
