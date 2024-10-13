import { useState } from 'react'
import Counter from './components/Counter'
import Stats from './components/Stats'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counters/counterSlice';


// const initialCounters = [
//   {
//     id:1,
//     value:0
//   },
//   {
//     id:2,
//     value:0
//   }
// ]
// no need after using redux

function App() {
  // const [counters, setCounters] = useState(initialCounters);
  // no need after using redux

  const counters = useSelector(state => state.counters);
  const dispatch = useDispatch();


  const totalCount = counters.reduce((total, counter) => total + counter.value, 0);












  const handleIncrement = (counterId) => {




    // no need after using redux
    // const updatedCounters = counters.map(counter =>{
    //   if(counter.id === counterId){
    //     return {
    //       ...counter,
    //       value: counter.value+1
    //     }
    //   }
    //   return counter;
    // });
    // setCounters(updatedCounters);
    // no need after using redux


    dispatch(increment(counterId));







  }
  const handleDecrement = (counterId) => {







    // no need after using redux
    // const updatedCounters = counters.map(counter =>{
    //   if(counter.id === counterId){
    //     return {
      //     ...counter,
      //     value: counter.value-1
      //   }
      // }
      // return counter;
    // });
    // setCounters(updatedCounters);
    // no need after using redux



    dispatch(decrement(counterId));







  }

  return (
    <div>
      <h1>Simple Counter</h1>
      <div>
        {counters.map((counter)=>(
          <Counter key={counter.id} 
          count={counter.value}
          onIncrement={() => handleIncrement(counter.id)}
          onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
        <Stats totalCount={totalCount}/>
      </div>
    </div>
  )
}

export default App
