import React, { forwardRef, useRef } from 'react'

const Button = forwardRef(function Button({handleChange, handleSubmit, madeInput, ...props}, ref) {
  const input = useRef()
  if(madeInput){
    input.current.value = ""
  }
  return (
    <div className="relative rounded-md w-4/5 lg:w-1/2 flex mx-auto">
        <input ref={input} onChange={handleChange} type="text" className="block w-full py-1.5 pr-20 hover:border-stone-300 text-[#27374D] placeholder:text-[#000] rounded-md p-2 bg-[#a1c2dc]" placeholder="Enter message..."/>
        <div onClick={handleSubmit} className="absolute inset-y-0 right-3 flex items-center hover:border hover:border-[#fcfafa] m-1 p-2 rounded-sm cursor-pointer">
        <i className="fa-regular fa-paper-plane text-[#000]"></i>
        </div>
    </div>
  )
})
export default Button