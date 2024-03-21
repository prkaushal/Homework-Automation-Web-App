import React from 'react'

function OptionCards({option}) {
  return (
    <>
        <div className='p-20 bg-customGrey-800 w-60 rounded-2xl h-60 border'>
            <h1 className='text-white font-bold text-lg text-center'>{option}</h1>
        </div>
    </>
  )
}

export default OptionCards