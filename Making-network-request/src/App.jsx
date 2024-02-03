import { useEffect, useState } from 'react'
import './App.css'
import DataDisplay from './components/DataDisplay'

function App() {
  const [data,setData]= useState([]);
  const [isLoading,setIsloading]=useState(false);
  const [error,setError]=useState(null);

  async function fetchData(){
    setIsloading(true);
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let data1 = await res.json();
      setData(data1);//data1 is Array of object
      setIsloading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }


  if(isLoading){
    return <h3>loading...</h3>
  }

  if(error){
    return <h3>Something went wrong</h3>
  }

  return (
    <>
      <button style={{border:"2px solid red"}} onClick={fetchData}>fetch</button>
      {data.map((ele)=>(
        <DataDisplay key={ele.id} obj={ele}/>
      ))}
    </>
  )
}

export default App
