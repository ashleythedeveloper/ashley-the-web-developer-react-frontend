import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
    base: {
      paddingBottom: theme.spacing(6)
    }
    
}));

const Copyright = () => {
    
    const classes = useStyles();

    return (
      <Typography variant="body2" color="textSecondary" align="center" className={classes.base} > 
        {'Copyright © '}
        <Link to="/" className={classes.link}>
          Ashley The Web Developer
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Copyright;