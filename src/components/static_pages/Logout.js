import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../global/axiosInstance';
import Loader from '../global/Loader';


const Logout = () => {
  const history = useHistory();

  // Initialise the default loading state
  const defaultLoadingState = { isLoading: false, loadingMessage: 'Logging you out. One moment.' }

  // Initialise a state variable to controll the loading screen.
  const [loading, setLoading] = useState(defaultLoadingState);


  useEffect(() => {
    setLoading({...loading, isLoading: true});
    axiosInstance.post('auth/blacklist-token/', {}, { withCredentials: true })
      .then((res) => {
        setLoading(defaultLoadingState);
        history.push('/login')
      })
      .catch((err) => {
        setLoading(defaultLoadingState);
        history.push('/login', {
          notification: {
            notificationType: 'error',
            notificationTitle: '',
            notificationMessage: "You're already logged out.",
            notificationTimer: null
          }
        })
      })
  });
  if (loading.isLoading) {
    return (
      <>
        <Loader message={loading.loadingMessage} />
      </>
    )
  } else {
    return (
      <>
      </>
    )
  }
}

export default Logout