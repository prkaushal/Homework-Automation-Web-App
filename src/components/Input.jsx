import React from 'react'

function Input({type , placeholder}) {
    

  return (
    <>
        <input type={type}  placeholder={placeholder} className='px-5 rounded-lg text-white outline-none border-white border py-1 bg-transparent w-80'/>
    </>
  )
}

export default Input