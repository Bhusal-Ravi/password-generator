import { useCallback, useState, useEffect, useRef } from 'react'
import Tutorial from './Tutorial'



function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("Hello")
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(true)

  const passwordRef = useRef(null)

  function copyPassword() {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }


  const passwordGen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""
    if (numbers) str += "1234567890"
    if (characters) str += "`'\/[]=-+)("

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [length, password, numbers, characters])
  useEffect(() => {
    passwordGen();
  }, [numbers, length, characters])
  return (
    <div className='min-h-screen min-w-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 p-4'>
      {/* Password Display Section */}
      <div className='flex flex-row justify-center items-center m-5 gap-4 flex-wrap'>
        <input
          type='text'
          value={password}
          readOnly
          className='bg-gray-100 shadow-md m-2 px-3 py-2 rounded-lg text-lg w-full sm:w-auto max-w-sm'
        />
        <button
          className='bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300'
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>

      {/* Controls Section */}
      <div className='flex sm:flex-row flex-col justify-center items-center gap-6 w-full sm:w-auto'>
        {/* Length Slider */}
        <div className='flex flex-row items-center gap-2'>
          <input
            type='range'
            ref={passwordRef}
            className='appearance-none rounded-lg h-3 bg-red-200 accent-red-500 w-60 sm:w-80'
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <span className='text-white font-semibold'>Length: {length}</span>
        </div>

        {/* Numbers Checkbox */}
        <label className='flex items-center gap-2 text-white font-medium'>
          <input
            type='checkbox'
            className='h-5 w-5'
            defaultChecked={numbers}
            onChange={() => setNumbers((prev) => !prev)}
          />
          Numbers
        </label>

        {/* Characters Checkbox */}
        <label className='flex items-center gap-2 text-white font-medium'>
          <input
            type='checkbox'
            className='h-5 w-5'
            defaultChecked={characters}
            onChange={() => setCharacters((prev) => !prev)}
          />
          Characters
        </label>
      </div>

      <Tutorial />
    </div>
  );
}
export default App
