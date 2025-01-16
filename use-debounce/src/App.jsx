import { useState, useEffect } from 'react'
import './App.css'

function useDebounce(value, delay){
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay)
      
    return () => {
      clearTimeout(handler);
    }
  }, [value, delay])

  return debouncedValue;
}

function App() {
  const [inputVal, setInputVal] = useState("");
  const dbValue = useDebounce(inputVal, 200)

  function change(e){
    setInputVal(e.target.value)
  }

  useEffect(() => {
    console.log(`expensive operation with ${dbValue}`)
  }, [dbValue])

  return (
    <input type="text" onChange={change}/>
  )
}

export default App
