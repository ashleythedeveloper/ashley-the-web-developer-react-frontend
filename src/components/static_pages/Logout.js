import React from 'react';
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom';
import axiosInstance from '../global/axiosInstance';
import Loader from '../global/Loader';


const Logout = () => {
  const history = useHistory();

  // Initialise the default loading state
  const defaultLoadingState = { isLoading: false, loadingMessage: 'Logging you out. One moment.' }


  const isLoggedIn = Cookies.get('is-logged-in');
  if (isLoggedIn === 'false') {
    history.push('')
  } else {


    axiosInstance.post('auth/blacklist-token/')
      .then((res) => {
        history.push('')
      })
      .catch((err) => {
        history.push('')
      })
}
    return (
      <>
        <Loader message={defaultLoadingState.loadingMessage} />
      </>
    )
  
  
}

export default Logout