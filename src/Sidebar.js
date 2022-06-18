import React,{useEffect, useState} from 'react';
import './Sidebar.css';  
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { SearchOffOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat'
import db from './firebase';

function Sidebar() {
  const [Rooms,setRooms]=useState([]);
  useEffect(()=>{
    db.collection("rooms").onSnapshot((snapshot)=>{
      setRooms(
        snapshot.docs.map((docs)=>({
          id:docs.id,
          data:docs.data()
        }))
      )
    })
  })
  return (
    <div className="sidebar">
       <div className="sidebar__header">
        <AccountCircleIcon/>
        <div className="sidebar__headerRight">
          <IconButton>
        <DonutLargeIcon/>
          </IconButton>
          <IconButton>
        <ChatIcon/>
          </IconButton>
          <IconButton>
        <MoreVertIcon/>
          </IconButton>
        </div>
       </div>
       <div className="sidebar__search">
         <SearchOffOutlined/>
        <div className="sidebar__searchContainer">
          <input type="text" placeholder='Search or start new chat' />
        </div>
       </div>
       <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        {
          Rooms.map(room=>(
            <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
          ))
        }
       </div>
    </div>
  )
}

export default Sidebar
