import Avatar from '../assets/avatar.png'
import './ChatListItem.css'

function ChatListItem() {
  return (
    <div className="chatList-item">
      <img src={Avatar} alt="avatar" width="52" className="chatList-item-avatar" />
      <div className="chatList-item-lines">
        <div className="chatList-item-line">
          <div className="chatList-item-name"> Boni</div>
          <div className="chatList-item-date"> 21/12/2022</div>
        </div>
        <div className="chatList-item-line">
          <p className="chatList-item-line-last-msg">Opa! Tudo bem?</p>
        </div>
      </div>
    </div>
  )
}

export default ChatListItem
