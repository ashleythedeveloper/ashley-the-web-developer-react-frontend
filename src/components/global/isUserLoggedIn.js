import React, {useState, useEffect, cloneElement} from 'react';
import axiosInstance from './axiosInstance';

const IsUserLoggedIn = ({children}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRequestLoading, setisRequestLoading] = useState(true)

    console.log(isLoggedIn)
    console.log(isRequestLoading)
    useEffect(() => {
        axiosInstance.get('auth/is-user/', { withCredentials: true })
            .then((res) => {
                setIsLoggedIn(true);
                setisRequestLoading(false);
            })
            .catch((err) => {
                setIsLoggedIn(false);
                setisRequestLoading(false);
            })
    }, [])

  return (
    <>
    {cloneElement(children, {isUserLoggedIn: isLoggedIn, isLoading: isRequestLoading})}
    </>
  )
};

export default IsUserLoggedIn