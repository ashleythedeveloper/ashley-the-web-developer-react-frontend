import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BoxesLoader } from "react-awesome-loaders";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


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

const Loader = ({message}) => {

  const classes = useStyles();

  return (
    <Container className={classes.loadingContainer}>
      <BoxesLoader
        boxColor={"#6366F1"}
        className={classes.loadingAnamation}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
      <Typography variant="h6" color="inherit" noWrap className={classes.loadingText}>
        {message}
      </Typography>
    </ Container>
  );
};

Loader.defaultProps = {
  message: "Loading"
  }

export default Loader;