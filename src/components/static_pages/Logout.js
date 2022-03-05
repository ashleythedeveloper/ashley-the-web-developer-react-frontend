import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axiosInstance from '../global/axiosInstance';


const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    
    axiosInstance.post('auth/blacklist-token/', {}, {withCredentials:true})
    .then((res) => {
      history.push('/login')
    })
    .catch((err) => {
      history.push('/login', {
        notification: {
          notificationType: 'error',
          notificationTitle: '',
          notificationMessage: "You're already logged out.",
          notificationTimer: null
        }})
    })
    });
  return (
    <>
    </>
  )
}

export default Logout