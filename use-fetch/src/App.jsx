import './App.css'
import { useState } from 'react';
import { usePost } from './hooks/usePost'
import { useFetch } from './hooks/useFetch';

function App() {

  return (
    <>
      <FetchComponent/>
    </>
  )
}

function FetchComponent(){
  const [currPost, setCurrPost] = useState(1);
  const {finalData: data, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${currPost}`);

  return (
    <div style={{display: 'flex', justifyContent:'center', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
        <button style={{padding: '8px 16px'}} onClick={() => setCurrPost(1)}>1</button>
        <button style={{padding: '8px 16px'}} onClick={() => setCurrPost(2)}>2</button>
        <button style={{padding: '8px 16px'}} onClick={() => setCurrPost(3)}>3</button>
      </div>
      <div>
        {loading ? <>Loading...</> : <>{data.body}</>}
      </div>
    </div>
  )
}

export default App
