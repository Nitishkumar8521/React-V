import { useEffect, useState } from 'react'
import './App.css'
import PostItem from './components/PostItem'

function App() {
  const [loading,setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error,setError] = useState(false);
  const [page,setPage] = useState(1);
  
 async function fetchData(){
  setLoading(true);
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
    let data = await res.json();
    console.log(data);
    setPosts(data);
    setLoading(false);
  } catch (error) {
    setError(true);
    console.log(error);
  }
 }

 useEffect(()=>{
  fetchData();
 },[page]) //whenever page state change useEffect called

if(loading){
  return <h2>Loading...</h2>
}

if(error){
  return <h2>Something went wrong</h2>
}
  return (
    <>
       <div style={{display:"flex",height:"50px",justifyContent:"space-evenly"}}>
       <button style={{border:"2px solid red"}} onClick={()=>{setPage(page-1)}} disabled={page<=1}>prev</button>
       <h2>Page :{ page}</h2>
       <button style={{border:"2px solid red", height:"50px"}} onClick={()=>{setPage(page+1)}} disabled={page>=20}>next</button>
       </div>
       {posts.map((ele)=>(
            <PostItem key={ele.id} obj={ele}/>
       ))}
    </>
  )
}

export default App
