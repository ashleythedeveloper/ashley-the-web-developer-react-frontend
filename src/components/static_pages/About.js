import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AboutContent from './AboutContent';
import MetaTags from 'react-meta-tags';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    heroHeading: {
        fontSize: "3rem",
        
    },
    profileImage: {
        borderRadius: '50%',
    },
    heroSection: {
        marginTop: theme.spacing(20),
    },
    heroSectionImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: theme.spacing(3)
    },heroSectionQualitiesText: {
        paddingTop: theme.spacing(3)
    },
    aboutMainContent: {
        display: 'flex',
        justifyContent: 'center'
    }

})
);


const About = () => {

    const classes = useStyles();

    return (
        <>
        <Container>
        <Grid container spacing={2}>
            <MetaTags>
            <title>About | Ashley The Web Developer</title>
            <meta name="description" content="Find out who Ashley The Web Developer is" />
            <meta property="og:title" content="About | Ashley The Web Developer" />
            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
          </MetaTags>
            <Grid item xs={12} className={classes.heroSection}>
                <Grid item xs={12} className={classes.heroSectionImageContainer}>
            <img src='./profileImage.png' width={150} height={150} className={classes.profileImage} />
            </Grid>
                <Typography variant="h2" component="h1" align="center" className={classes.heroHeading}>
                    About Me
                </Typography>
                <Grid item xs={12} className={classes.heroSectionQualitiesText}>
            <Typography align='center'>
                Inquisitive | Persistent | Problem Solver 
            </Typography>
            </Grid>
            </Grid>
            <Grid item className={classes.aboutMainContent}>
            <Grid item xs={12} md={10} align="center">
                <AboutContent />
            </Grid>
            </Grid>
        </Grid>
        </Container>
        </>
    );
};

export default About