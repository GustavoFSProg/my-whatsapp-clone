import React, { useState } from 'react'
import './App.css'
import Avatar from '../src/assets/avatar.png'
import Donut from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVert from '@material-ui/icons/MoreVert'
import Search from '@material-ui/icons/Search'
import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'

function App() {
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      title: 'Geraldo Lula',
      image: `${Avatar}`,
    },

    {
      chatId: 2,
      title: 'Ana Golfinho',
      image: `${Avatar}`,
    },
    {
      chatId: 3,
      title: 'Fernando Golfinho',
      image: `${Avatar}`,
    },
  ])
  const [activeChat, setActiveChat] = useState([])
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src={Avatar} alt="avatar" />
          <div className="header-buttons">
            <div className="header-btn">
              <Donut style={{ color: '#919191' }} />
              <ChatIcon style={{ color: '#919191' }} />

              <MoreVert style={{ color: '#919191' }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <Search
              fontSize="small"
              style={{ color: '#919191', marginLeft: '-10px', marginTop: '10px' }}
            />
            <input
              className="search-input-field"
              type="search"
              style={{ marginLeft: '10px', border: 'none' }}
              placeHolder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatlist">
          {chatList.map((item, key) => {
            console.log(item)
            return (
              <ChatListItem
                key={key}
                active={activeChat.chatId === item.chatId}
                onClick={() => setActiveChat(chatList[key])}
              />
            )
          })}
        </div>
      </div>

      <div className="contentarea">
        {activeChat.chatId !== undefined && <ChatWindow chatId={activeChat.chatId} />}

        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  )
}

export default App
