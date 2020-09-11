import React from "react";
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
<<<<<<< HEAD
=======

>>>>>>> ba2c92d8d6278e4a539a8d06de493a45f6e29931
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

function App() {
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
              <Draw />
            </Route>
            <Route path = "/chat" component={Chat}/>
            <Route path = "/join" component={Join}/>
<<<<<<< HEAD
=======

>>>>>>> ba2c92d8d6278e4a539a8d06de493a45f6e29931
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
