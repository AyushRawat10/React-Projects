import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [description, setDescription] = useState("");

  function addValue() {
    if(counter < 20) {
      setCounter(counter + 1);
    } else {
      setDescription("Counter value can not be more than 20")
    }
  }

  function removeValue() {
    if(counter) {
      setCounter(counter - 1);
    } else {
      setDescription("Counter value can not be less than 0")
    }
  }

  return (
    <>
      <h1>Chai aur React | Ayush Rawat</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Counter</button>
      <button
      onClick={removeValue}
      >Remove Counter</button>
      <p>{description}</p>
    </>
  )
}

export default App
