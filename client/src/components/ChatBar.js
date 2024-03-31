import React, {useState, useEffect} from 'react'
import { useContext } from 'react'
import authContext from '../context'

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([])
    const {username} = useContext(authContext)

    useEffect(()=> {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

  return (
    <div className='chat__sidebar'>
        <h2>HI ! {username}</h2>
        <div>
            <h4  className='chat__header'>ACTIVE USERS</h4>
            <div className='chat__users'>
                {users.map(user => <p key={user.socketID}>{user.userName}</p>)}
            </div>
        </div>
  </div>
  )
}

export default ChatBar