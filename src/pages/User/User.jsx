import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { Button } from '../Login/Login';
import { useParams } from 'react-router-dom';

const User = () => {
  const { username } = useParams()
  const { handleLogout } = useContext(AuthContext);

  return (
    <div>
      <h1>Bienvenido {username}</h1>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </div>
  );
};

export default User;
