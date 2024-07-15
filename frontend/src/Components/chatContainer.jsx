import { useEffect, useState } from "react"
import ChatList from "./chatList"
import InputText from "./Input"
import UserLogin from "./userLogin"
import socketIoClient from 'socket.io-client'


const ChatContainer=()=>{

    const [user,setUser]=useState(localStorage.getItem('user'))

    const socketIo=socketIoClient('http://localhost:3001')

    const [chats,setChats]=useState([])

    console.log(user)

    useEffect(()=>{

        socketIo.on('chat',(chats)=>{
          setChats(chats)
        })
    })

    const sendToSocket=(chat)=>{

        socketIo.emit('chat',chat)

    }

    const addMessage=(chat)=>{

        const newChat={...chat,user:localStorage.getItem('user')}
          setChats([...chats,newChat])

          sendToSocket([...chats,newChat])
    }

    const logout=()=>{

        localStorage.removeItem('user')

        setUser('')
        
    }



    return(
        <div>

            {
                user ?(

                        
            <div>
            <div className="chats-header">
                <h4>Username:{user}</h4>

                <p className='chat-logout'>
                    <button onClick={logout} className='btn btn-primary'>Logout</button>
                </p>
            </div>
            <ChatList chats={chats}/>
            <InputText addMessage={addMessage}/>
        </div>

                ):<UserLogin setUser={setUser}/>
           
           
           }
           
                    
           
               
        </div>
    )
}

export default ChatContainer