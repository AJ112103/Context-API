import { useState } from 'react'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil'

const count = atom({
  key: 'countState',
  default: 0
})

function Parent() {

  return (
    <RecoilRoot>
          <Increase />
          <Decrease />
          <Value /> 
    </RecoilRoot>
  )
}

function Increase(){
  const setCount = useSetRecoilState(count);

  return (
    <button onClick={() => setCount(c => c + 1)}>Increase</button>
  )
}

function Decrease(){
  const setCount = useSetRecoilState(count);

  return (
    <button onClick={() => setCount(c => c - 1)}>Decrease</button>
  )
}

function Value(){
  const value = useRecoilValue(count);

  return (
    <div>
      {value}
    </div>
  )
}

function App(){
  return (
    <div>
      <Parent/>
    </div>
    
  )
}

export default App
