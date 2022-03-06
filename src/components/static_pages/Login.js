import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MetaTags from 'react-meta-tags';
import axiosInstance from '../global/axiosInstance';
import Footer from '../global/Footer';
import Loader from '../global/Loader';
import NotificationAlert from '../global/NotificationAlert';
import Header from '../global/Header';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  notificationAlertBox: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));



const Login = () => {

  // Initialise a variable and set it to the history object.
  const history = useHistory();

  const location = useLocation();


  // Initialise an immutable object that will store the forms data.
  const initalFormData = Object.freeze({
    email: '',
    password: '',
  });

  // Initialise a state variable and asign the frozen form object to it.
  const [formData, updateFormData] = useState(initalFormData);

  // Initialise the default loading state
  const defaultLoadingState = { isLoading: false, loadingMessage: 'Logging you in. Hold tight!' }

  // Initialise a state variable to controll the loading screen.
  const [loading, setLoading] = useState(defaultLoadingState);


  const [hasShowSuccessNotification, setHasShowSuccessNotification] = useState(false);

  // Set the default notification state
  const defaultNotificationState = {
    notificationType: '',
    notificationTitle: '',
    notificationMessage: '',
    notificationTimer: 0
  }
  const successNotificationState = location.state ? location.state.notification : defaultNotificationState
 
  console.log(location.state)
  // Used to store success and error messages
  const [notifications, setNotifications] = useState(hasShowSuccessNotification ? defaultNotificationState : successNotificationState);


  const defaultFormFieldErrorState = {
    email: false,
    password: false,
  }

  // Initialise a state variable to contol the form fileds error state.
  const [formFieldErrors, setFormFieldErrors] = useState(defaultFormFieldErrorState);

  // Inilise a function that will be used to close the alert box.
  const closeNotificationAlertBox = () => {
    setHasShowSuccessNotification(true)
    // Set the message state variable to an empty string which will 
    // cause the alert box to disapear due to the ternary statment contained within the messageAlert variable.
    setNotifications(defaultNotificationState);

    // Set all of the values to the corrisponding keys that handle the error fields to false.
    setFormFieldErrors(defaultFormFieldErrorState);
  };
  console.log(notifications)
    // Set the messageAlert variable to a ternary statment that will control if the alert box will be displayed or not.
    // If the message state variable is empty show nothing, else display the NotificationAlert component along with the relvent message.
    let notificationAlertBox = notifications.notificationMessage ? <NotificationAlert 
      alertType={notifications.notificationType} 
      alertTitle={notifications.notificationTitle} 
      alertMessage={notifications.notificationMessage} 
      alertCloseCallback={closeNotificationAlertBox} 
      notificationTimer={notifications.notificationTimer}/> : ''


    const handleFormChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleFormSubmit = (e) => {

      e.preventDefault();

      setLoading({...loading, isLoading: true})

      axiosInstance.post('login/', {
        email: formData.email,
        password: formData.password,
      }, {withCredentials: true})
        .then((res) => {
          history.push('');
        })
        .catch((err) => {

          if (err.response.status === 401) {
            setNotifications({
              notificationType: err.response.data.notificationType,
              notificationTitle: err.response.data.notificationTitle,
              notificationMessage: err.response.data.notificationMessage,
              notificationTimer: null
            });
            setLoading(defaultLoadingState)
          }
        })
    };
    const classes = useStyles();
    if(loading.isLoading) {
      return (
      <Loader message={loading.loadingMessage} />
      )
    } else {
    return (
      <>
            <Header />
        <Container component="main" maxWidth="xs">
          <MetaTags>
            <title>Login | Ashley The Web Developer</title>
            <meta name="robots" content="noindex" />
            <meta property="og:title" content="Login | Ashley The Web Developer" />
            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
          </MetaTags>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
        <Grid item xs={12} className={classes.notificationAlertBox}>
          {notificationAlertBox}
        </Grid>
            <form name="loginForm" className={classes.form} onChange={handleFormChange} onSubmit={handleFormSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
          </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Forgot password?
              </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        <Footer />
      </>
    )}
  }

  export default Login