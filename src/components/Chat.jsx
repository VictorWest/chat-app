import React from 'react'

export default function Chat({name, photoURL, message}) {
  return (
    <div className='bg-[#76ABAE] my-5 w-fit text-stone-950 p-2 px-5 ms-8 rounded-xl rounded-es-none'>
        <p className='text-xs font-bold pb-1 me-auto'>{name}</p>
        {/* <img src={photoURL} alt="" /> */}
        <p>{message}</p>
    </div>
  )
}
