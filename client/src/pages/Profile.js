import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <Container>
      <h1>Your Profile</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <Link to="/">Go home</Link>
    </Container>
  );
}

export default Profile;
