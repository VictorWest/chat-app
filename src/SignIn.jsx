import googlePNG from './assets/google.png'
export default function SignIn({signInWithGoogle}){
  return <div className="flex justify-center h-full mt-[10rem]">
    <button onClick={signInWithGoogle} className="bg-[#4889F4] rounded-sm text-[#fff] font-bold flex items-center gap-2 drop-shadow-lg pe-3 ps-1 hover:bg-slate-700">
      <img src={googlePNG} alt='Google Logo' className='w-10 bg-white p-1 rounded-sm'/>
      <p className='py-3'>Sign In With Google</p></button>
  </div>
}