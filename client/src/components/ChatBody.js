import React from 'react'
import {useNavigate} from "react-router-dom"
import { useContext } from 'react'
import AuthContext from '../context'

const ChatBody = ({messages, typingStatus, lastMessageRef}) => { 
  const navigate = useNavigate()
  const {username} = useContext(AuthContext)

  const handleLeaveChat = () => {
    localStorage.removeItem("userName")
    navigate("/")
    window.location.reload()
  }
  
  return (
    <>
      <header className='chat__mainHeader'>          
          <button className='leaveChat__btn' onClick={handleLeaveChat}>LEAVE CHAT</button>
        </header>


        <div className='message__container'>
          {messages.map(message => (
            message.name === username ? (
              <div className="message__chats" key={message.id}>
            <p className='sender__name'>You</p>
            <div className='message__sender'>
                <p>{message.text}</p>
            </div>
          </div>
            ): (
              <div className="message__chats" key={message.id}>
            <p>{message.name}</p>
            <div className='message__recipient'>
                <p>{message.text}</p>
            </div>
          </div>
            )
            ))}

          <div className='message__status'>
            <p>{typingStatus}</p>
          </div>
          <div ref={lastMessageRef} />   
        </div>
    </>
  )
}

export default ChatBody