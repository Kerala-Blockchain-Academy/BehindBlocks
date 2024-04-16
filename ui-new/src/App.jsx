import { useState } from 'react'

function App() {
  const [input, setInput] = useState()
  const [output, setOutput] = useState()

  function handleChange(event) {
    setInput(event.target.value)
  }

  async function setValue() {
    const response = await fetch('http://127.0.0.1:8080/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    })
    if (response.ok) {
      alert('Set Successfully')
    } else {
      alert('Failed to Set')
    }
  }

  async function getValue() {
    const res = await fetch('http://127.0.0.1:8080/read')
    if (res.status == 200) {
      const result = await res.json()
      setOutput(result)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="font-bold text-2xl py-4">Sample Dapp</p>
      <p className="font-bold text-xl py-4">Set Message</p>
      <input
        type="text"
        onChange={handleChange}
        className="border border-gray-400 py-4 px-6 rounded"
        placeholder="Enter your Message"
      ></input>
      <br />
      <button
        onClick={setValue}
        className="bg-blue-400 hover:bg-blue-700 rounded text-white py-2 px-6"
      >
        Set
      </button>
      <p className="font-bold text-xl py-4">Get Message</p>
      <button
        onClick={getValue}
        className="bg-blue-400 hover:bg-blue-700 rounded text-white py-2 px-6"
      >
        Get
      </button>
      <p className="font-bold text-2xl py-4">{output}</p>
    </div>
  )
}

export default App
