import { useState } from 'react';
import './App.css';

function App() {
  const[inputMsg,setinputMsg]=useState();
  const[outputMsg,setoutputMsg]=useState();

  function msgHandler(event){
    setinputMsg(event.target.value);
  }

  async function setValue(){
     const response = await fetch('http://127.0.0.1:8000/create',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({inputMsg})
     })
     console.log(response.status);
    //  const res1= await response.json();
     if(response.ok){
      alert("Sucessfully sent to api");
     }
     else{
      alert("Something is wrong");
     }
  } 

  async function getValue(){
      const data = await fetch('http://127.0.0.1:8000/read');
      const result = await data.json();
      setoutputMsg(result);
  }



  return (
    <div className='flex flex-col justify-center items-center h-screen'>   
   <p className='font-bold text-2xl py-4'>Sample Dapp</p>
   <p className='font-bold text-xl py-4'>Set Message</p>
   <input type='text' onChange={msgHandler} className='border border-gray-400 py-4 px-6 rounded' placeholder='Enter your Message'></input><br/>
   <button onClick={setValue} className='bg-blue-400 hover:bg-blue-700 rounded text-white py-2 px-6'>Set</button>
   <p className='font-bold text-xl py-4'>Get Message</p>
   <button onClick={getValue} className='bg-blue-400 hover:bg-blue-700 rounded text-white py-2 px-6'>Get</button>
   <p className='font-bold text-2xl py-4' >{outputMsg}</p>

   </div>
  );
}

export default App;
