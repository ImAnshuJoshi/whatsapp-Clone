import React from 'react'
import './Chat.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
// import './bg.png';

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
    <p className={`chat__message ${true &&"chat__reciever"}`}>
                <span className="chat__name">
                    Anshu Joshi
                </span>
                hello guys how are you? 
            <span className="chat__timestamp">
                3:25pm
            </span>
            </p>
        </div>
        <div className="chat__footer">
        <EmojiEmotionsIcon/>
        <form action="">
            <input type="text" placeholder="Type your message">
            </input>
            <button>Send</button>
        </form>
        <MicIcon/>
        </div>
    </div>
  )
}

export default Chat
