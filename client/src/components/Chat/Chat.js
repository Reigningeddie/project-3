import React from 'react'
import TextField from '@material-ui/core/TextField'
import Draw from '../Draw/Draw';
import './Chat.css';


function Chat(props) {

  console.log("props: ", props);
  //console.log("location: ", location);


  const onTextChange = e => {
    props.changeState({ ...props.stateValue, [e.target.name]: e.target.value })
  }



  const renderChat = () => {
    return props.chatValue.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  return (
    <div className="row">
      <div className="column">
        <Draw />
      </div>
      <div className="column" id="chatWindow">
        <form onSubmit={props.sendMessage}>
          <h1 id="chatHeader">Artsy Chat</h1>
          <hr></hr>
          <div className="name-field" id="nameField">
            <TextField
              name="name"
              onChange={e => onTextChange(e)}
              value={props.stateValue.name}
              label="Your Name"
            />
          </div>
          <div id="messageField">
            <TextField
              name="message"
              onChange={e => onTextChange(e)}
              value={props.stateValue.message}
              id="outlined-multiline-static"
              variant="outlined"
              label="Your Message"
            />
          </div>
          <button id="chatButton">Send Message</button>
        </form>
        <h1 id="chatHeader">Chat Log</h1>
        <div className="render-chat" id="chatLog">
          <div id="chatBody">
          {renderChat()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;