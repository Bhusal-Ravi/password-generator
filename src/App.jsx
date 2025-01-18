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
    <div className='min-h-screen min-w-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 '>
      <div className='flex flex-row justify-center item-center m-10 gap-4 '>
        <input type='text' value={password} readOnly className='bg-gray-400 shadow-md m-2 px-3 py-1' />
        <button className='bg-red-400 px-4  rounded-md shadow-md hover:bg-red-600 duration-700' onClick={copyPassword}>Copy</button>
      </div>
      <div className='flex sm:flex-row justify-center gap-4 flex-col'>
        <input type='range' ref={passwordRef} className='mx-5 accent-red-400 appearance-none rounded-lg h-2 bg-red-200' min={8} max={20} value={length} onChange={(e) => { setLength(e.target.value) }} /> <span>Length:{length}</span>
        <input type='checkbox' className='mr-2' defaultChecked={numbers} onChange={() => { setNumbers((prev) => !prev) }} /> <span >Numbers</span>
        <input type='checkbox' className='mr-2' defaultChecked={characters} onChange={() => { setCharacters((prev) => !prev) }} /> <span >Characters</span>
      </div>
      <Tutorial />
    </div>

  )
}

export default App
