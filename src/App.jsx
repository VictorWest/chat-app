import React from 'react'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { app, db } from './firebaseConfig'
import { collection } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import ChatRoom from './components/ChatRoom'
import SignIn from './SignIn'
import SignOut from './SignOut'

export default function App() {
  let auth = getAuth();

  const collectionRef = collection(db, 'chats')

  function signInWithGoogle(){
    let provider = new GoogleAuthProvider
    signInWithPopup(auth, provider)
    .then(response => {
      localStorage.setItem("displayName", response.user.displayName)
      localStorage.setItem("photoURL", response.user.photoURL)
    })
    .catch(err => console.log(err.message))
  }

  const currentUser = {
    name: localStorage.getItem("displayName"),
    photoURL: localStorage.getItem("photoURL"),
  }

  const [user] = useAuthState(auth)

  return (
    <div>
      <header className='bg-[#27374D] text-white flex justify-center p-5 font-bold flex-col items-center gap-3 sticky top-0'>
        <h2 className='text-4xl'>Victor's Chat Room!</h2>
        <div>
          <p className='text-[#788290]'>anything man.....anything</p>
        </div>
        <SignOut auth={auth}/> 
      </header>
      {user ? <ChatRoom auth={auth} currentUser={currentUser} collectionRef={collectionRef}/> : <SignIn signInWithGoogle={signInWithGoogle}/>}
    </div>
  )
}