import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client"
import { AuthContextProvider } from "./context";
import { createContext , useState , useContext} from "react";




const socket = socketIO.connect("http://localhost:4000")

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home socket={socket}/>}></Route>
              <Route path="/chat" element={<ChatPage socket={socket}/>}></Route>
            </Routes>
      </div>
      </BrowserRouter>
    </AuthContextProvider>
    
  );
}

export default App;
