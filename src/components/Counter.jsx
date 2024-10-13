import React, { useState } from 'react'
import Count from './Count';
import Button from './Button';

const Counter = ({count, onIncrement, onDecrement}) => {
    // const [count, setCount] = useState(0)

    // const handleIncrement = () => {
    //     setCount((prevCount) => prevCount +1);
    // };
    // const handleDecrement = () =>{
    //     setCount((prevCount) => prevCount -1);
    // };

  return (
    <div>
        <Count count={count}/>
        <div>
            <Button handler={onIncrement}>Increament</Button>    
            <Button type="danger" handler= {onDecrement}>Decreament</Button>
        </div>        
    </div>
  )
}

export default Counter