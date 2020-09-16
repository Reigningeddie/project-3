import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Our Components
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Draw from "./components/Draw";
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import io from 'socket.io-client';



function App({ location }) {
  const [state, setState] = useState({ message: '', name: '' })
  const [chat, setChat] = useState([]);
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const [context, setContext] = useState('');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

 const handleContext = (newContext) => {
    setContext(newContext);
  } 
  const handleWidth = (newWidth) => {
    setWidth(newWidth);
  }
  const handleHeight = (newHeight) => {
    setHeight(newHeight);
  }

  const handleState = (newState) => {
    setState(newState);
  }
  const handleChat = (newChat) => {
    setChat(newChat);
  }
  const handleName = (newName) => {
    setName(newName);
  }
  const handleRoom = (newRoom) => {
    setRoom(newRoom);
  }

  const onMessageSubmit = e => {
    e.preventDefault()
    const { name, message } = state
    socket.emit('message', { name, message })
    setState({ message, name })
  }

  let socket;
  const ENDPOINT = 'localhost:3001'


  useEffect(() => {

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    console.log(socket);

    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
    socket.on('draw_line', function (data) {
      var line = data.line;
      context.beginPath();
      context.lineWidth = 2;
      context.moveTo(line[0].x * width, line[0].y * height);
      context.lineTo(line[1].x * width, line[1].y * height);
      context.stroke();
   });
  });
  
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
            <Route exact path="/draw">
              <Draw 
                changeContext={handleContext}
                changeWidth={handleWidth}
                changeHeight={handleHeight}
                contextValue={context}
                widthValue={width}
                heightValue={height}
              />
            </Route>
            <Route exact path="/chat">
              <Chat 
                changeState={handleState}
                changeName={handleName}
                changeRoom={handleRoom}
                changeChat={handleChat}
                stateValue={state}
                nameValue={name}
                roomValue={room}
                chatValue={chat}
                sendMessage={onMessageSubmit}
              />
            </Route>
            <Route path = "/join" component={Join}/>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
