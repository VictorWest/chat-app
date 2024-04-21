import { useState, useEffect, useRef } from "react"
import Chat from "./Chat"
import Button from "./Button"
export default function ChatRoom({auth, currentUser}){
    const serverURL = 'http://localhost:3000'
    // https://chat-app-backend-iy1i.onrender.com
    const [chatRoom, setChatRoom] = useState([])
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    const [madeInput, setMadeInput] = useState(false)
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
      setMadeInput(false)
      setData(e.target.value)
    }
    function handleSubmit(){
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
      setMadeInput(true)
    }
    
    return(
      <>   
      <div className="chats pb-[5rem] p-5 flex flex-col">
          {chatRoom.length > 0 ? chatRoom.map((item) => {
            return <Chat name={item.name} photoURL={item.photoURL} message={item.message} timeStamp={item.createdAt} isVerified = {item.name === "Victor West"}/>
          }) : <p className="text-center">No chats yet... <i class="fa-solid fa-gears"></i></p>}
      </div>

        <form onSubmit={handleSubmit} className="fixed bottom-0 flex flex-col w-full bg-[#27374D] p-5 text-stone-300">
          {error && <div className="mx-auto bg-red-900 px-2 mb-2">There was an error. Try again</div>}
          <Button type="submit" handleChange={handleChange} handleSubmit={handleSubmit} madeInput={madeInput}/>
        </form>
      </>
    )
  }