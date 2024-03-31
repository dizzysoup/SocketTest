import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { useContext } from 'react'
import AuthContext from '../context'


const Home = ({socket}) => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const authContext = useContext(AuthContext)

    const handleLogin = () => {
      authContext.onLogin(userName);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(userName)
        localStorage.setItem("userName", userName)
        socket.emit("newUser", {userName, socketID: socket.id})
        navigate("/chat")
    }
  return (
    <form className='home__container' onSubmit={handleSubmit}>
        <h2 className='home__header'>Socket 的作業</h2>
        <label htmlFor="username">Username</label>
        <input type="text"         
        name="username" 
        id='username'
        className='username__input' 
        value={userName} 
        onChange={e => setUserName(e.target.value)}
        />
        <button className='home__cta'>SIGN IN</button>
    </form>
  )
}

export default Home