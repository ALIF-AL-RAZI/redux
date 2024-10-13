import { useState } from 'react'
import Counter from './components/Counter'
import Stats from './components/Stats'


const initialCounters = [
  {
    id:1,
    value:0
  },
  {
    id:2,
    value:0
  }
]

function App() {
  const [counters, setCounters] = useState(initialCounters);

  const totalCount = counters.reduce((total, counter) => total + counter.value, 0);
  const handleIncrement = (counterId) => {
    const updatedCounters = counters.map(counter =>{
      if(counter.id === counterId){
        return {
          ...counter,
          value: counter.value+1
        }
      }
      return counter;
    });
    setCounters(updatedCounters);
  }
  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map(counter =>{
      if(counter.id === counterId){
        return {
          ...counter,
          value: counter.value-1
        }
      }
      return counter;
    });
    setCounters(updatedCounters);
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
