import React from 'react';
import './Sidebar.css';  
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { SearchOffOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat'

function Sidebar() {
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
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
       </div>
    </div>
  )
}

export default Sidebar
