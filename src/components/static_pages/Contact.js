import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ContactForm from '../global/ContactForm';
import MetaTags from 'react-meta-tags';
import Loader from '../global/Loader';



const useStyles = makeStyles((theme) => ({
    contactHeading: {
        paddingTop: theme.spacing(20),
    },
    contactText: {
        paddingBottom: theme.spacing(5),
    },
    
  })
);


const Contact = () => {

    const classes = useStyles();

    const initalLoadingState = {isLoading: false, loadingMessage: 'Sending your message now. One moment.'};

    const [loading, setLoading] = useState(initalLoadingState);

    if (loading.isLoading) {
        return (
            <Loader message={loading.loadingMessage} />
        )
    } else {
    return (
        <>
        <Container maxWidth="xl">
            <MetaTags>
            <title>Contact | Ashley The Web Developer</title>
            <meta name="description" content="Contact Ashley The Web Developer to Build Your Project Today" />
            <meta property="og:title" content="Contact | Ashley The Web Developer" />
            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
          </MetaTags>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" className={classes.contactHeading}>
                            Get in Touch 
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" className={classes.contactText}>
                            Fill out the contact form below <br />and I will be in touch within 24-48 hours.
                        </Typography>
                    </Grid>
                </Grid>
                <ContactForm setLoading={setLoading} loading={loading}/>
            </div>
        </Container>
        
        </>
    );
    }
};

export default Contact;