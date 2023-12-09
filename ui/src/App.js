import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>   
   <p className='font-bold text-2xl py-4'>Sample Dapp</p>
   <p className='font-bold text-xl py-4'>Set Message</p>
   <input type='text'className='border border-gray-400 py-4 px-6 rounded' placeholder='Enter your Message'></input><br/>
   <button className='bg-blue-400 hover:bg-blue-700 rounded text-white py-2 px-6'>Set</button>
   <p className='font-bold text-xl py-4'>Get Message</p>
   <button className='bg-blue-400 hover:bg-blue-700 rounded text-white py-2 px-6'>Get</button>
   <p className='font-bold text-2xl py-4' ></p>

   </div>
  );
}

export default App;
