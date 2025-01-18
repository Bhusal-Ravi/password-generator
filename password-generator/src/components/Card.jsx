import React from 'react'
import { useState } from 'react'

function Card() {
    const [newcolor, setNewColor] = useState("pink")
    //const [color, setColor] = useState("")

    function newColor(event) {

        setNewColor((prevColor) => {

            return prevColor = event.target.innerText


        })



    }
    return (
        <div className='w-full h-screen duration-200'>
            <div className='fixed flex flex-wrap  justify-center py-40 gap-5 bottom-12 inset-x-0 px-2'>
                <button className='px-3 border bg-red-400 m-auto text-white' onClick={newColor}>Red</button>
                <button className='px-3 border  bg-black m-auto text-white' onClick={newColor}>Black</button>
                <button className='px-3 border  bg-pink-400 m-auto text-white' onClick={newColor}>Pink</button>
                <button className='px-3 border  bg-blue-400 m-auto text-white' onClick={newColor}>Blue</button>
                <button className='px-3 border  bg-green-400 m-auto text-white' onClick={newColor}>Green</button>
                <button className='px-3 border  bg-purple-400 m-auto text-white' onClick={newColor}>Purple</button>
                <button className='px-3 border  bg-yellow-400 m-auto text-white' onClick={newColor}>Yellow</button>
            </div>
        </div>
    )
}

export default Card