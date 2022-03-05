import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axiosInstance from '../global/axiosInstance';



const useStyles = makeStyles((theme) => ({
    formFields: {
        display: 'flex',
    },
    formContainer: {
        [theme.breakpoints.up("xl")]: {
            paddingRight: theme.spacing(28),
            paddingLeft: theme.spacing(28),
        },
    },
}));



const ContactForm = ({setLoading, loading}) => {

    const history = useHistory();


    const initalFormData = Object.freeze({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    
    const [formData, updateFormData] = useState(initalFormData)

    
    const handleChange = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
        });
      };

      const formSubmit = (e) => {
    
        e.preventDefault()
        setLoading({...loading, isLoading: true});
        
    
      axiosInstance.post('contact-message/', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message
      })
      .then(() => {
        setLoading({...loading, isLoading: true})
          history.push('/thank-you')
      })
        
   }
    

    const classes = useStyles();
    return (
        <form className={classes.contactForm} name="contactForm" onChange={handleChange} onSubmit={formSubmit} noValidate>
            <Grid container justify='center' spacing={2} className={classes.formContainer}>

                <Grid item xs={11} sm={8} lg={4}>
                    <TextField
                        className={classes.formFields}
                        variant="outlined"
                        margin="normal"
                        required
                        name="firstName"
                        label="First Name"
                        id="firstName"
                        autoComplete="given-name"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={11} sm={8} lg={4}>
                    <TextField
                        className={classes.formFields}
                        variant="outlined"
                        margin="normal"
                        required
                        name="lastName"
                        label="Last Name"
                        id="lastName"
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={11} sm={8} lg={8}>
                    <TextField
                        className={classes.formFields}
                        variant="outlined"
                        margin="normal"
                        required
                        type="email"
                        name="email"
                        label="Email"
                        id="email"
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={11} sm={8} lg={8}>
                    <TextField
                        className={classes.formFields}
                        multiline
                        rows={10}
                        variant="outlined"
                        margin="normal"
                        required
                        name="message"
                        label="Message"
                        id="message"
                    />
                </Grid>
                <Grid item xs={11} sm={8} lg={8}>
                    <Button type="submit" variant="contained" color="primary">
                        <Typography>
                            Send Message
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
};

export default ContactForm