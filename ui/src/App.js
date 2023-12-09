import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex flex-col justify-center items-center '>   
   <p>Sample Dapp</p>
   <p>Set Message</p>
   <input type='text' placeholder='Enter your Message'></input><br/>
   <button className='bg-blue-400'>Set</button>
   <p>Get Message</p>
   <button>Get</button>
   <p></p>

   </div>
  );
}

export default App;
