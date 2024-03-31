import React, {useState , useContext} from 'react'
import AuthContext from '../context'

const ChatFooter = ({socket}) => {
    const [message, setMessage] = useState("")
    const authContext = useContext(AuthContext)

   // const handleTyping = () => socket.emit("typing",`${localStorage.getItem("userName")} is typing`)

    const handleSendMessage = (e) => {
        e.preventDefault()
        console.log( authContext.username)
        if(message.trim() && authContext.username) {
        socket.emit("message", 
            {
            text: message, 
            name: authContext.username, 
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id
            }
        )
        }
        setMessage("")
    }
  return (
    <div className='chat__footer'>
        <form className='form' onSubmit={handleSendMessage}>
          <input 
            type="text" 
            placeholder='Write message' 
            className='message' 
            value={message} 
            onChange={e => setMessage(e.target.value)}
           /* onKeyDown={handleTyping}*/
            />
            <button className="sendBtn">SEND</button>
        </form>
     </div>
  )
}

export default ChatFooter