import React from 'react'

function Button1({ onClick , children}) {
  return (
    <>
        <button onClick={onClick} className='border  border-white bg-customGrey-300 py-1 px-10 text-white rounded-lg w-80' >{children}</button>
    </>
  )
}

export default Button1