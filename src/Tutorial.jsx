import React from 'react'

export default function Tutorial() {
  return (
    <div className='flex flex-col items-center justify-center mt-20 p-5 bg-gray-50 rounded-lg shadow-lg w-full max-w-4xl'>
      {/* Main Heading */}
      <h1 className='text-3xl sm:text-4xl font-bold py-6 text-center'>
        How to Use the <span className='text-red-500'>Password Generator</span>
      </h1>
      
      {/* Subheading */}
      <h2 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-8'>
        <span className='text-red-500'>Tutorial</span>
      </h2>
      
      {/* Tutorial Content */}
      <div className='text-gray-700 leading-relaxed space-y-6'>
        <p>
          <strong className='text-red-500'>Copy Password:</strong> Click the Copy button to save the displayed password.
        </p>
        <p>
          <strong className='text-red-500'>Adjust Length:</strong> Use the slider to set your desired password length; a new password is generated instantly.
        </p>
        <p>
          <strong className='text-red-500'>Add Numbers/Characters:</strong> Check Numbers to include digits or Characters for symbols like [ \ | / ; . ] etc.
        </p>
        <p>
          <strong className='text-red-500'>Auto-Update:</strong> Changes to length or options instantly generate a new password.
        </p>
      </div>
    </div>
  );
}
