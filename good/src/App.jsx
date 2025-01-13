import { useState, createContext, useContext } from 'react'
import './App.css'

const BulbContext = createContext();

function BulbProvider({children}){
  const [bulbOn, setBulbOn] = useState(true);

  return( 
    <div>
      <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
        {children}
      </BulbContext.Provider>
    </div>
  )
}

function App() {

  return (
    <>
      <BulbProvider>
        <Light />
      </BulbProvider>
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
