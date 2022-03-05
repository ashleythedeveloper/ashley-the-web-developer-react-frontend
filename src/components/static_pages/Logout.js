import React from 'react';
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom';
import axiosInstance from '../global/axiosInstance';
import Header from '../global/Header';
import Loader from '../global/Loader';


const Logout = () => {
  const history = useHistory();

  // Initialise the default loading state
  const defaultLoadingState = { isLoading: false, loadingMessage: 'Logging you out. One moment.' }


  const isLoggedIn = Cookies.get('is-logged-in');
console.log(isLoggedIn)
  if (isLoggedIn === 'false') {
    history.push('')
  } else {


    axiosInstance.post('auth/blacklist-token/', {}, { withCredentials: true })
      .then((res) => {
        history.push('')
      })
      .catch((err) => {
        history.push('')
      })
}
    return (
      <>
        <Header />
        <Loader message={defaultLoadingState.loadingMessage} />
      </>
    )
  
  
}

export default Logout