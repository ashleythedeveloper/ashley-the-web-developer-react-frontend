import React from 'react';
import MetaTags from 'react-meta-tags';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';


const useStyles = makeStyles((theme) => ({
    image: {
        maxWidth: 400,
        maxHeight: 400,
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(7),
    },
    text: {
        paddingBottom: theme.spacing(7),
    },
    linktext: {
        fontSize: 10,
    },

}))

const NotFound404 = () => {

    const classes = useStyles()

    return (
        <>
        <Header />
        <Container maxWidth='xl'>
            <MetaTags>
                  <title>404 Not Found</title>
                  <meta name="description" content={"404 Not Found" }/>
                  <meta property="og:title" content={"404 Not Found"} />
                  {/* <meta property="og:image" content="path/to/image.jpg" /> */}
              </MetaTags>
            <Grid container align='center' spacing={2}>
                <Grid item xs={12}>
                    <img src={window.location.origin + '/ORFI0N0.jpg'} alt='404' className={classes.image}></img>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h3' component='h2' className={classes.text}>
                        Hoy!<br/> <br/>
                        The page you are looking for does not exist!
                        <br /><br />
                        <a href='https://www.freepik.com/vectors/background' className={classes.linktext}>Background vector created by bamdewanto - www.freepik.com</a>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        <Footer/>
        </>
    );
};

export default NotFound404