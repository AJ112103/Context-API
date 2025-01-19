import { useState } from 'react'
import { usePrev } from './hooks/use-prev';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const prev = usePrev(count);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <br />
      <p>The previous value was {prev}</p>
    </>
  )
}

export default App
