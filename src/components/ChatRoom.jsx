import { useState, useEffect } from "react"
import SignOut from "../SignOut"
import { addDoc, getDocs } from "firebase/firestore"
import Chat from "./Chat"
import Button from "./Button"
export default function ChatRoom({auth, currentUser}){
    const serverURL = 'http://localhost:3000'

    const [chatRoom, setChatRoom] = useState([])
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    
    useEffect(() => {
      fetch(serverURL)
      .then(res => res.json())
      .then(data => {
        setChatRoom(data)
        setError(false)
      })
      .catch(() => setError(true))
    }, [data])
    
  
    function handleChange(e){
      setData(e.target.value)
    }
    function handleSubmit(){
      // console.log(data);
      fetch(`${serverURL}/new-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: data,
          name: currentUser.name,
          photoURL: currentUser.photoURL
        })
      }).then(res => {
        if (!res.ok){
          res.status(400)
          throw new Error('Failed to Fetch')
        }
        fetch(serverURL)
          .then(res => res.json())
          .then(data => {
            setChatRoom(data)
            setError(false)
          })
        .catch(() => setError(true))
      }).catch(() => setError(true))
    }

    return(
      <>   
      <div className="chats pb-[5rem]">
          {chatRoom ? chatRoom.map((item) => {
            return <Chat name={item.name} photoURL="https://www.w3schools.com/" message={item.message}/>
          }) : <p>Loading chats...</p>}
      </div>

        <form onSubmit={handleSubmit} className="fixed bottom-0 flex flex-col w-full bg-[#27374D] p-5 text-stone-300">
          {error && <div className="mx-auto bg-red-900 px-2 mb-2">There was an error. Try again</div>}
          <Button type="submit" handleChange={handleChange} handleSubmit={handleSubmit}/>
          
        </form>
      </>
    )
  }