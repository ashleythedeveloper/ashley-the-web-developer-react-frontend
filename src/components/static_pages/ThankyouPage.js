import React from 'react'
import MetaTags from 'react-meta-tags';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../global/Footer';



const useStyles = makeStyles((theme) => ({
    image: {
        maxWidth: 400,
        maxHeight: 400,
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(7),
    },
    text: {
        paddingTop: theme.spacing(17),
    },
    linktext: {
        fontSize: 10,
    },

}))

const ThankyouPage = () => {

    const classes = useStyles()

    return (
        <>
        <Container maxWidth='xl'>
            <MetaTags>
                  <title>Thank You</title>
                  <meta name="robots" content="noindex" />
              </MetaTags>
            <Grid container align='center' spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h5' component='h2' className={classes.text}>
                        Thank you for reacing out!<br/> <br/>
                        I will be in contact with you <br />within 24-48 hours.
                        <br /><br />
                    </Typography>
                </Grid>
            </Grid>
            <Footer/>
        </Container>
        </>
    );
};

export default ThankyouPage