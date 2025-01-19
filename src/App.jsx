import { useCallback, useState, useEffect, useRef } from 'react';
import Tutorial from './Tutorial';

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);

  const passwordRef = useRef(null);

  function copyPassword() {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  const passwordGen = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = '';
    if (numbers) str += '1234567890';
    if (characters) str += "`'\\/[]=-+)(";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numbers, characters]);

  useEffect(() => {
    passwordGen();
  }, [numbers, length, characters]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-4">
     
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 w-full max-w-lg">
        <input
          type="text"
          value={password}
          readOnly
          className="bg-white shadow-md px-4 py-2 rounded-lg text-lg text-gray-800 w-full sm:w-auto max-w-sm"
        />
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>

    
     
        <div className="flex flex-col items-center gap-2">
          <input
            type="range"
            ref={passwordRef}
            className="appearance-none rounded-lg h-3 bg-gray-600 accent-blue-500 w-full"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <span className="text-gray-200 font-semibold">Length: {length}</span>
        </div>

      
        <label className="flex items-center gap-2 text-gray-200 font-medium">
          <input
            type="checkbox"
            className="h-5 w-5 accent-blue-500"
            defaultChecked={numbers}
            onChange={() => setNumbers((prev) => !prev)}
          />
          Numbers
        </label>

      
        <label className="flex items-center gap-2 text-gray-200 font-medium">
          <input
            type="checkbox"
            className="h-5 w-5 accent-blue-500"
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

export default App;
