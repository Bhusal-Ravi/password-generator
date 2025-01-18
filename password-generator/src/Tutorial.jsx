import React from 'react'

export default function Tutorial() {
    return (
        <div className='flex flex-col flex-wrap items-center justify-center mt-40 mx-5 my-5'>
            <h1 className='text-4xl py-10'>How to Use the <span className='text-red-400'>Password Generator</span></h1>
            <h2 className='text-3xl'><span className='text-red-400'>Tutorial</span></h2>
            <div className='py-10 mx-5 my-5'>
                <p><strong className='text-red-400'>Copy Password:</strong> Click the Copy button to save the displayed password.</p>
                <p><strong className='text-red-400'>Adjust Length:</strong> Use the slider to set your desired password length; a new password is generated instantly.</p>
                <p><strong className='text-red-400'>Add Numbers/Characters:</strong> Check Numbers to include digits or Characters for symbols like [ \ | / ; . ] etc.</p>
                <p><strong className='text-red-400'>Auto-Update:</strong> Changes to length or options instantly generate a new password.</p>
            </div>


        </div>
    )
}
