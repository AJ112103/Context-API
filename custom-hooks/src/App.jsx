import { useState } from 'react'
import './App.css'

function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count + 1)
  }

  function resetCount(){
    setCount(0)
  }

  return {
    count: count,
    increaseCount: increaseCount,
    resetCount: resetCount
  }
}

function App() {

  return (
    <div>
     <Value/>
     <Value/>
     <Value/>
    </div>
  )
}

function Value(){
  const {count, increaseCount, resetCount} = useCounter();

  return <div>
      <button onClick={increaseCount}>Count: {count}</button>
      <button onClick={resetCount}>Reset</button>
    </div>
}

export default App
