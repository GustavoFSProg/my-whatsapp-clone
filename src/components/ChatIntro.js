import Intro from '../assets/intro.jpg'
import './ChatIntro.css'

function ChatIntro() {
  return (
    <div className="imagem">
      <img src={Intro} alt="intro" width="490" />
      <div
        style={{
          background: '#00e600',
          width: '154%',
          marginLeft: '-47px',
          marginTop: '127px',
          height: '6px',
          borderRadius: '20px',
        }}
      ></div>
    </div>
  )
}

export default ChatIntro
