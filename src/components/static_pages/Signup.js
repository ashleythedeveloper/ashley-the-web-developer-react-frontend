import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axiosInstance from '../global/axiosInstance';
import Footer from '../global/Footer';
import Loader from '../global/Loader';
import NotificationAlert from '../global/NotificationAlert';
import GenerateMetaTags from '../global/GenerateMetaTags'

// Styling
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alertContainer: {
    paddingTop: theme.spacing(3),
  }
}));

// A functonal component that creates a new account by taking in the users details via a form, 
// validating the form data and then sending the validated form data to the signup endpoint as an object. 

// The form validation checks for empty form fields, valid email address and if the password + confirm password check matches.
// The rest of the validation is handled by the signup endpoint (trimming, formatting the form data). 

// If there is an error in validating the users signup data the end point will retun an object with the details of the error.
// Any error recived from the endpoint or any error generated via this component will be displayed via an alert box above the form and explain what the issue is.

const Signup = () => {
  // Initialise a variable and set it to the history object.
  const history = useHistory();

  // Initialise a variable that will be used to display an alert box.
  let messageAlert;

  // Initialise an immutable object that will store the forms data.
  const initalFormData = Object.freeze({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  });

  // Initialise a state variable and asign the frozen form object to it.
  const [formData, updateFormData] = useState(initalFormData);

  // Initialise a state variable to controll the loading screen.
  const [loading, setLoading] = useState(false);

  // Initialise a state variable to store any error from the signup endpoint or this component.
  const [message, setMessage] = useState('');

  // Initialise a state variable to contol the form fileds error state.
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    username: false,
    password: false,
    password2: false,
  });

  // Initialise a function to handle any change to the form fields and commits those changes to the forms object held within state.
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // Initialise a function to handle the submit event which is call by the create account button at the bottom of the form.
  const formSubmit = (e) => {
    // Hide the signup form and display the loading screen.
    setLoading(true);

    // Prevent the form from submitting.
    e.preventDefault();

    // Check if both passwords match. If the passwords dont match, deactivate the loading screen and show the signup form along with
    // the alert box with the appropriate error message and both password fields highlited (error).
    if (formData.password !== formData.password2) {
      setLoading(false);
      setMessage({ message: "Your passwords don't match. Please try again." });
      setFieldErrors({ password: true, password2: true });
      window.scrollTo(0, 0)
    } else {
      // If both passwords match, submit the form data object to the signup endpoint.
      axiosInstance.post('signup/', formData)
        .then((res) => {
          // If the users account has been created, deactivate the loading screen and navigate the user to the login page.
          setLoading(false);
          history.push('/login');
        })
        .catch((err) => {
          // If the endpoint returned and error, deactivate the loading screen.
          setLoading(false);
          if (!err.response && err.message.includes('timeout')) {
            // If the errors response object is empty the conection has timed out. Display the alert box with the appropiate message.
            setMessage({ message: "There has been an error communicating with our database and we were not able to create your account. If the problem persists, please contact support." })
          } else if (!err.response) {
            setMessage({ message: "There has been an error with CORS and we were not able to create your account. If the problem persists, please contact support." })

          } else {
            // Checks the errors response object if the error was caused because the user exists
            if (err.response.data.errorType === "User Exists") {
              // Checks if the error was raised because of a matching username. 
              // If so, display the alert box along with the appropiate message and username field highlighted (error).
              if (err.response.data.field === "Username") {
                setMessage(err.response.data)
                setFieldErrors({ username: true })
              } else {
                // If the previous check failed it was because the email matches an existing user.
                // Display the alert box along with the appropiate message and email field highlighted (error).
                setMessage(err.response.data)
                setFieldErrors({ email: true })
              }
            } else if (err.response.data.errorType === "password") {
              // Check if the error was produced because of an invalid password (shorter than 8 charaters).
              // Display the alert box along with the appropiate message and both password fields highlighted (error).
              setMessage(err.response.data)
              setFieldErrors({ password: true, password2: true })
            } else {
              // The error has been caused by an error creating the user on the backend.
              // Display the alert box along with the appropiate message.
              setMessage(err.response.data)
            };
          };
        });
    };
  };

  // Inilise a function that will be used to close the alert box.
  const closeAlert = () => {
    // Set the message state variable to an empty string which will 
    // cause the alert box to disapear due to the ternary statment contained within the messageAlert variable.
    setMessage('');

    // Set all of the values to the corrisponding keys that handle the error fields to false.
    setFieldErrors({
      email: false,
      username: false,
      password: false
    });
  };

  // Call the Material UI Style API
  const classes = useStyles();

  // Set the messageAlert variable to a ternary statment that will control if the alert box will be displayed or not.
  // If the message state variable is empty show nothing, else display the NotificationAlert component along with the relvent message.
  messageAlert = message ? <NotificationAlert alertType={"error"} alertTitle={"Error"} alertMessage={message.message} alertCloseCallback={closeAlert} /> : ''

  // If the loading state variable is set to true, show the loading component, else show the signup page.
  if (loading) {
    return (
      <Loader message="Creating your account, hold tight!" />
    )
  } else {
    return (
      <>
        <Container component="main" maxWidth="xs">
          <GenerateMetaTags />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
        </Typography>
            <Grid container spacing={2} className={classes.alertContainer}>
              <Grid item xs={12}>
                {messageAlert}
              </Grid>
            </Grid>
            <form className={classes.form} name="signupForm" onChange={handleChange} onSubmit={formSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="userName"
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="Username"
                    autoComplete="username"
                    error={fieldErrors.username}
                    defaultValue={formData.userName}
                  />
                </Grid>
                <Grid item item xs={6}>
                  <TextField
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    required
                    id="firstName"
                    label="First Name"
                    defaultValue={formData.firstName}
                  />
                  </Grid>
                  <Grid item item xs={6}>
                  <TextField
                    name="lastName"
                    variant="outlined"
                    fullWidth
                    required
                    id="lastName"
                    label="Last Name"
                    defaultValue={formData.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={fieldErrors.email}
                    defaultValue={formData.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={fieldErrors.password}
                    defaultValue={formData.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password2"
                    label="Confirm Password"
                    type="password"
                    id="password2"
                    autoComplete="new-password"
                    error={fieldErrors.password2}
                    defaultValue={formData.password2}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Create Account
          </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login" variant="body2">
                    Already have an account? Sign in
              </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        <Footer />
      </>
    )
  }
};

export default Signup;