import axios from 'axios';
import Cookies from "js-cookie";
import { useState, useEffect } from 'react';

const getUserData = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    axios.get("//express-server-hire.herokuapp.com/api/all")
      .then(response => {
        const users = response.data;
        const userArr = users.filter((user) => user.email === Cookies.get('user'));
        setUser(userArr[0]);
      }).catch(err => err.message)
  }, [user]);
  return user;
}

export default getUserData;
