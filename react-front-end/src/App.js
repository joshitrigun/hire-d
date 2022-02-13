import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Profile from './components/profile';

export default function App() {
  const [state, setState] = useState({
    user: {}
  })
  useEffect(() => {
    axios.get(`/api/users`)
    .then((response) => {
      setState(prev => ({
        ...prev, user: response.data[0]
      }))
    })
    .catch(err => err)
  }, [])
  return (
    <div className="App">
      <Profile user={state.user} />
    </div>
  );
}
