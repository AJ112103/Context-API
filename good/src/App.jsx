import { useState, createContext, useContext } from 'react'
import './App.css'

const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <>
      <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
        <Light />
      </BulbContext.Provider>
    </>
  )
}

function Light(){

  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb(){
  const {bulbOn} = useContext(BulbContext)
  return <div>
    {bulbOn ? 'bulb is on' : 'off'}
  </div>
}

function LightSwitch(){
  const {bulbOn, setBulbOn} = useContext(BulbContext)

  function toggle(){
    setBulbOn(!bulbOn);
  }
  return <div>
    <button onClick={toggle}>Light Switch</button>
  </div>
}

export default App
