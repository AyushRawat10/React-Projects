import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef();

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  })

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "@#$%^&*()_-+={}[]";

    for (let index = 1; index <= length; index++) {
      let randomValue = Math.floor(Math.random() * str.length + 1)
      console.log(randomValue);
      pass += str.charAt(randomValue)
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="body w-full h-screen bg-black flex items-center justify-center">
        <div className="passwordDiv w-4xl bg-gray-800 h-64 rounded-4xl flex items-center flex-col">
          <h1 className="text-3xl text-amber-200 decoration-20 align-center my-5 font-semibold">Password Generator</h1>
          <div className="input-box w-2xl h-12 my-5">
            <input 
            type="text"
            className="w-5/6 h-full text-2xl px-4 rounded-l-2xl text-gray-900"
            value={password} 
            placeholder="Password Generator"
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
            />
            <button className="copy-btn bg-amber-500 text-white w-1/6 text-2xl h-full rounded-r-2xl"
            onClick={copyToClipboard}
            >Copy</button>
          </div>
          <div className="parameter-box w-2xl my-5 flex justify-between">
            <div className="length-box">
              <input 
              type="range"
              id="passwordLength" 
              value={`${length}`}
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label htmlFor="passwordLength" className='text-xl mx-3'>Length: {length}</label>
            </div>
            <div className="number-box">
              <input 
              type="checkbox"
              id="Number"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="Number" className='text-xl mx-3'>Number</label>
            </div>
            <div className="character-box">
              <input 
              type="checkbox" 
              id="Character" 
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="Character" className='text-xl mx-3'>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
