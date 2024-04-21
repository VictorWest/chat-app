import React from 'react'

export default function Chat({name, photoURL, message, timeStamp, isVerified}) {
  if(timeStamp){
    // timeStamp = timeStamp.slice(11, 16)
    const time = new Date(timeStamp)
    const newTimezoneOffset = -time.getTimezoneOffset() 
    time.setUTCMinutes(time.getUTCMinutes() + newTimezoneOffset);
    timeStamp = `${time.getUTCHours() < 10 ? `0${time.getUTCHours()}` : time.getUTCHours()}:${time.getUTCMinutes()}`
  }
  return (
    <div className='bg-[#76ABAE] my-5 w-1/2 mx-auto text-stone-950 p-2 px-5 rounded-xl rounded-es-none max-[600px]:w-full max-[600px]:ms-0'>
      <div className='flex gap-2 items-center justify-start'>
        <img src={photoURL} alt="" className='w-5 rounded-full'/>
        <p className='text-xs font-bold pb-1 '>{name}</p> 
       {isVerified && <i class="fa-solid fa-ribbon"></i>  }    
      </div>
        <p>{message}</p>
        <p className='font-bold text-xs text-end'>{timeStamp}</p>
    </div>
  )
}
