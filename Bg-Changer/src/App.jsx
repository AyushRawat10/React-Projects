import { useState } from 'react'

function App() {
  const [color, setColor] = useState("")
  return (

    <>
      <div className="w-full h-screen"
      style={{backgroundColor: color}}
      >
        <div className="bg-holder bg-amber-50 py-3 rounded-xl my-5">
          <button
          onClick={() => setColor("red")}
          className="bg-red-600 px-8 py-2 text-white rounded-xl mx-3">Red</button>
          <button
          onClick={() => setColor("orange")}
          className="bg-orange-400 px-8 py-2 text-white rounded-xl mx-3">Orange</button>
          <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-300 px-8 py-2 text-white rounded-xl mx-3">Yellow</button>
          <button
          onClick={() => setColor("green")}
          className="bg-green-300 px-8 py-2 text-white rounded-xl mx-3">Green</button>
          <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 px-8 py-2 text-white rounded-xl mx-3">Blue</button>
          <button
          onClick={() => setColor("purple")}
          className="bg-purple-400 px-8 py-2 text-white rounded-xl mx-3">Purple</button>
          <button
          onClick={() => setColor("black")}
          className="bg-black px-8 py-2 text-white rounded-xl mx-3">Black</button>
        </div>
      </div>
    </>
  )
}

export default App
