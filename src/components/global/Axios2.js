import React, {useState, useEffect} from 'react';
import axiosInstance from '../global/axiosInstance';
import ApiLoadScreen from './LoadingScreen';


const Axios2 = ({endpoint, component, ...props}) => {
    const ApiLoading = ApiLoadScreen(component);
    const [appState, setAppState] = useState({
        isLoading: true,
        apiData: null,
        endpoint: endpoint,
        });
    const [error, setError] = useState('')
    
    useEffect(() => {
        axiosInstance.get(appState.endpoint)
            .then((response) => {
                setAppState({
                ...appState,
                apiData: response.data,
                isLoading: false,
                });})
            }, []);
        
     
    return (
        <React.Fragment>
            <ApiLoading error={error} match={props.match} isLoading={appState.isLoading} blogPost={appState.blogPost} endpoint={appState.endpoint} apiData={appState.apiData}/>
        </React.Fragment>
        );
  };


export default Axios2
