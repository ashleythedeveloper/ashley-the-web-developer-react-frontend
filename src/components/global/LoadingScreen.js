import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { BoxesLoader } from "react-awesome-loaders";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NotFound404 from './NotFound404';
import Header from './Header';


const useStyles = makeStyles((theme) => ({
    loadingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    loadingAnamation: {
        marginTop: '15rem',
      },
    loadingText: {
        marginTop: -50,
      },  
    }))

const LoadingScreen = (Component) => {

    const classes = useStyles();
    
    return function ApiLoadingScreen({ isLoading, text, error, ...props }) {
      if (!isLoading) return <Component {...props}/>;
      if (error === 500 | error === 404) {
        return (
          <React.Fragment>
            <Header />
            <NotFound404 />
          </React.Fragment>
        )};
      return(
        <Container className={classes.loadingContainer}>
          <BoxesLoader
            boxColor={"#6366F1"}
            className={classes.loadingAnamation}
            desktopSize={"128px"}
            mobileSize={"80px"}
          />
          <Typography variant="h6" color="inherit" noWrap className={classes.loadingText}>
            {text || 'Loading'}
          </Typography>
      </ Container>       
      );
}};

export default LoadingScreen;