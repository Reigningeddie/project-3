import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import Draw from '../Draw/Draw';
import './Chat.css';

const socket = io.connect('http://localhost:3001')

function Chat() {
  const [state, setStaet] = useState({ message: '', name: '' })
  const [chat, setChat] = useState([])

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  })

  const onTextChange = e => {
    setStaet({ ...state, [e.target.name]: e.target.value })
  }

  const onMessageSubmit = e => {
    e.preventDefault()
    const { name, message } = state
    socket.emit('message', { name, message })
    setStaet({ message: '', name })
  }

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <p>
          {name}: <span>{message}</span>
        </p>
      </div>
    ))
  }

  return (
    <div className="row">
      <div className="column">
        <Draw />
      </div>
      <div className="column" id="chatWindow">
      <h1 id="chatHeader">Chat</h1>
      <hr></hr>
      <h1 id="logHeader">Chat Log</h1>
        <div className="render-chat" id="chatLog">
          <div id="chatBody">
          {renderChat()}
          </div>
        </div>
        <form onSubmit={onMessageSubmit} id="chatForm">
          <div className="name-field" id="nameField">
            <TextField
              name="name"
              onChange={e => onTextChange(e)}
              value={state.name}
              id="outlined-multiline-static"
              variant="outlined"
              label="Your Name*"
            />
          </div>
          <div id="messageField">
            <TextField
              name="message"
              onChange={e => onTextChange(e)}
              value={state.message}
              id="outlined-multiline-static"
              variant="outlined"
              label="Your Message*"
            />
          </div>
          <button id="chatButton">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Chat;