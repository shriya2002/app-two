import React,{useState,useEffect} from 'react'

const Increments = [1,2,3,5,10]
const Counter = () => {
    const [data,setData]=useState(0)
useEffect(()=>{
    document.title = 'Count:' +data
})


  return (
    <div>
      <h3> {data}</h3>
      <div >
      {Increments.map(o => 
      { 
         return <button onClick={()=>setData(data+ o)}> {o}</button>

      })}
        {/* <button onClick={() => setData(data + 1)}>Increment</button>
        <button onClick={() => setData(data - 1)}>Decrement</button> */}
      </div>
    </div>
  );
}

export default Counter
