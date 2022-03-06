import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Schema from '../global/Schema';
import Footer from '../global/Footer';
import Header from '../global/Header';




const useStyles = makeStyles((theme) => ({
    heroContent: {
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    heroContainer: {

        backgroundColor: theme.palette.background.paper,
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(17),
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(45),
        },
    },
    heroButtons: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(0, 0, 20),
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing(45),
        }
    },
}))

const pageData = {
    title: "Ashley The Web Developer | Web Design and Development in Newcastle NSW",
    description: "Ashley The Web Developer | Let's Build Somthing!",
    url: 'ashleythewebdeveloper.com.au',
    image: '',
}
const markup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ashley The Web Developer",
    image: pageData.url + "/Ashley-The-Web-Developer.png",
    url: pageData.url,
    telephone: "0478 970 416",
    address: {
        addressLocality: "Newcastle",
        postalCode: "2300",
        addressCountry: "Australia"
    },
    areaServed: [
        { "@type": "Place", "name": "Newcastle, New South Wales" }
    ],
    priceRange: "$$"
}


const HomePage = () => {

    const classes = useStyles();


    return (
        <React.Fragment>
            <Header />
            <MetaTags>
                <title>{pageData.title}</title>
                <meta name="description" content={pageData.description} />
                <meta property="og:title" content={pageData.title} />
                {/* <meta property="og:image" content="path/to/image.jpg" /> */}
            </MetaTags>
            <Schema markup={markup} />

            {/* ---------------Section 1 --------------------------- */}

            <Container>
                <div className={classes.heroContent}>
                    <Grid item className={classes.heroContainer}>
                        <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom className={classes.heroText}>
                            Ashley<br />The Web Developer
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Automating your boring tasks and <br />
                            developing web apps that eat WordPress websites for breakfast<br />
                        </Typography>
                    </Grid>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justifyContent="flex-start">
                            <Grid item>
                                <Button component={Link} to="/contact" variant="contained" color="primary">
                                    Build my Project
                        </Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to="/portfolio" variant="outlined" color="primary">
                                    Portfolio
                        </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
            <Footer />
        </React.Fragment>



    );
};

export default HomePage;