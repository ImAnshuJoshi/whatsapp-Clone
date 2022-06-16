import React from 'react'
import './Chat.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Chat() {
  return (
    <div className="chat">
        <div className="chat__header">
            <AccountCircleIcon/>
            <div className="chat__headerInfo">
                <h3>Room name</h3><p>
                    Last seen
                </p>
            </div>
            <div className=".chat__headerRight">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <IconButton>
                <InsertLinkIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
            </div>
        </div>
        <div className="chat__body">
            
        </div>
        <div className="chat__footer">

        </div>
    </div>
  )
}

export default Chat
