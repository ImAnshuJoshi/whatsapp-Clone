import React from 'react'
import './SidebarChat.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SidebarChat({addNewChat}) {
  const createChat =()=>{
    const roomName=prompt("Please enter name for chat");
  };
  // if(roomName){
  //     //Hi
  // }
  return !addNewChat ? (
    <div className='sidebarChat'>
      <AccountCircleIcon/>
      <div className="sidebarChat__info">
         <h2>
             Room name</h2>
             <p>
                 Last message...</p> 
      </div>
    </div>
  ):(
    <div className="sidebarChat" onClick={createChat}>Add chat</div>
  )
}

export default SidebarChat;
