import React, { useState, useEffect } from 'react';
import axiosInstance from '../global/axiosInstance';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import NotesIcon from '@material-ui/icons/Notes';
import CodeIcon from '@material-ui/icons/Code';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
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
    divider: {
        marginTop: theme.spacing(20),
    },
    automationDiv: {
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(25),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(10),
        },
    },
    automationContainer: {
        marginRight: 0,
        maxWidth: "100%",
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            paddingTop: theme.spacing(15),
        },
        [theme.breakpoints.up('xl')]: {
            paddingTop: theme.spacing(20),
            paddingBottom: theme.spacing(20),
        },
    },
    automationCardHeading: {
        fontWeight: 'bold',
    },
    automationCardContainer: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    automationCardItem: {
        textAlign: 'left',
        order: 0,
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            order: 1,
        }
    },
    automationCardAvatar: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
    },
    avatarLarge: {
        width: theme.spacing(17),
        height: theme.spacing(17),
    },
    automationCardButton: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(6),
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(5)
        },
    },
    automationHeading: {
        fontWeight: 'bold',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(4),
        },
    },
    automationCopyText: {
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            paddingBottom: theme.spacing(4),
        },
    },
    automationCopyButton: {
        textAlign: 'left',
        paddingTop: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            paddingBottom: theme.spacing(15),
            textAlign: 'center',
        },
    },
    webDevelopmentContainer: {
        maxWidth: "100%",
    },
    webDevelopmentDiv: {
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(25),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(20),
        },
    },
    webDevelopmentCopyHeading: {
        textAlign: 'left',
        fontWeight: 'bold',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    },
    webDevelopmentCardText: {
        textAlign: 'left',
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(5),
            textAlign: 'center',
        },
    },
    webDevelopmentCardButton: {
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    webDevelopmentImageItem: {
        marginTop: theme.spacing(11),
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',

        },
    },
    webDevelopmentImageCard: {

        [theme.breakpoints.down('xl')]: {
            maxWidth: 614,
            maxHeight: 335,

        },
        [theme.breakpoints.down('lg')]: {
            maxWidth: 614,
            maxHeight: 335,
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 510,
            maxHeight: 280,
            display: 'flex',
            justifyContent: 'center',

        },
    },
    mainContentP1: {
        padding: theme.spacing(10, 0, 15),
        backgroundColor: 'white',
    },
    mainContentP1Content: {
        display: 'flex',
        justifyContent: 'center'
    },
    mainContentP1Heading: {
        fontWeight: 'bold',
        paddingTop: theme.spacing(10),
        display: 'flex',
        justifyContent: 'center',
    },
    mainContentP1SubHeading: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(13),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(6),
        },
    },
    cardIconSection: {
        display: 'flex',
        justifyContent: 'flex-start',
        paddingTop: theme.spacing(4),
    },
    rounded: {
        height: '4rem',
        width: '4rem',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: 'black',
        backgroundColor: 'white',
    },
    cardButtonSection: {
        paddingBottom: theme.spacing(4),
        paddingLeft: 17,
    },
    br: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'inline-block',
        },
    },
    card: {
        [theme.breakpoints.down('md')]: {
            minHeight: '100%',
        },
    },
    gg: {
        maxWidth: '100%'
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
                <Divider variant='middle'></Divider>
            </Container>

            {/* ---------------Section 2 --------------------------- */}

            <div className={classes.automationDiv}>
                <Grid container className={classes.automationContainer} alignItems="center" justifyContent="space-evenly">
                    <Grid item xs={11} sm={7} md={5} lg={3} xl={3} className={classes.automationCardItem}>
                        <Card raised={true}>
                            <Grid container spacing={2} className={classes.automationCardContainer}>
                                <Grid item xs={12} align="center" className={classes.automationCardAvatar}>
                                    <Avatar className={classes.avatarLarge} alt="Harwoods Lawn Care" src='https://ashleythewebdeveloper.com.au/harwoods-logo.png' />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='h5' className={classes.automationCardHeading}>
                                        Harwood's Lawn Care
                                            </Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography variant='body2' className={classes.automationCardText}>
                                        Utilising a program that Ashley developed, Harwood's Lawn Care was able to save over 50hr per year
                                                which is equivalent to $1,300 a year. <br /> <br />
                                                Instead of wasting that money every year, we were able to put that saved money back into advertising. <br /> <br />
                                                This paid for the software within 4 months.
                                            </Typography>
                                    <div className={classes.automationCardButton}>
                                        <Button component={Link} to="/contact" variant="outlined" color="primary" >
                                            Full Case Study
                                                </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={11} md={10} lg={5} xl={4} className={classes.automationCopyItem}>
                        <Grid container spacing={2} className={classes.automationCardContainer}>
                            <Grid item xs={12}>
                                <Typography variant='h3' className={classes.automationHeading}>
                                    Discover The Power of Automation
                                    </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='body1' className={classes.automationCopyText}>
                                    How much money could you save?
                                        <br /><br />
                                       $1000, $5000, Maby $10,000?
                                       <br /><br />
                                       I can build you simple and easy-to-use automation tools that save you real money.
                                       <br />
                                       Think about it.
                                       <br /><br />
                                       Why would you waste your time completing long, boring, and mind-numbing tasks when a machine could be doing it for you?
                                    </Typography>
                                <div className={classes.automationCopyButton}>
                                    <Button component={Link} to="/contact" variant="contained" color="primary" >
                                        More about automation
                                        </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Container>
                <Divider variant='middle'></Divider>
            </Container>

            {/* ---------------Section 3 --------------------------- */}

            <div className={classes.webDevelopmentDiv}>
                <Grid container className={classes.webDevelopmentContainer} justifyContent="space-evenly">
                    <Grid item xs={10} lg={4} className={classes.webDevelopmentCopyDiv}>
                        <Grid container spacing={2} className={classes.webDevelopmentCopyContainer}>
                            <Grid item xs={12}>
                                <Typography variant='h3' className={classes.webDevelopmentCopyHeading}>
                                    Powerful Websites
                                        <br />That Grow With You
                                    </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='body1' className={classes.webDevelopmentCardText}>
                                    If you looking for someone to build you a website you're in the right place.
                                       <br /> <br />
                                       But there is an elephant in the room. And yes, it's WordPress.
                                       <br /> <br />
                                       Don't get me wrong, if you want a slow, boring WordPress website that can't grow with you, go for it, WordPress is great.
                                       <br /> <br />
                                       But what I can build for you is a beautiful, powerful, responsive website that can grow with you.
                                    </Typography>
                                <div className={classes.webDevelopmentCardButton}>
                                    <Button component={Link} to="/contact" variant="contained" color="primary" >
                                        More about Powerful websites
                                        </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} lg={4} className={classes.webDevelopmentImageItem}>
                        <Card raised={true} className={classes.webDevelopmentImageCard}>
                            <img src='https://ashleythewebdeveloper.com.au/notifyme.jpg' alt="" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                        </Card>
                    </Grid>
                </Grid>
            </div>

            {/* ---------------Section 4 --------------------------- */}

            <Divider variant='middle'></Divider>
            <Container className={classes.mainContentP1}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='h3' align='center' className={classes.mainContentP1Heading}>
                            The <br className={classes.br} />Process
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' align='center' className={classes.mainContentP1SubHeading}>
                            Contrary to popular belief, Lorem Ipsum is not simply <br className={classes.br} />
                        It has roots in a piece of classical Latin literature from 45 BC, making it.
                    </Typography>
                    </Grid>
                </Grid>
                <div className={classes.mainContentP1Content}>
                    <Grid container spacing={7} justifyContent='center' className={classes.gg}>
                        <Grid item xs={10} sm={9} md={4}>
                            <Card raised={true} className={classes.card}>
                                <CardActionArea>
                                    <CardContent className={classes.cardIconSection}>
                                        <Avatar variant="rounded" className={classes.rounded}>
                                            <NotesIcon fontSize='large' style={{ color: 'black' }} />
                                        </Avatar>
                                        {/*  */}
                                    </CardContent>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Get your breif
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardButtonSection}>
                                    <Button size="small" variant='contained' color="primary">
                                        Learn More
                                </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sm={9} md={4}>
                            <Card raised={true} className={classes.card}>
                                <CardActionArea>
                                    <CardContent className={classes.cardIconSection}>
                                        <Avatar variant="rounded" className={classes.rounded}>
                                            <CodeIcon fontSize='large' style={{ color: 'black' }} />
                                        </Avatar>
                                    </CardContent>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Code your project
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardButtonSection}>
                                    <Button size="small" variant='contained' color="primary">
                                        Learn More
                                </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sm={9} md={4}>
                            <Card raised={true}>
                                <CardActionArea>
                                    <CardContent className={classes.cardIconSection}>
                                        <Avatar variant="rounded" className={classes.rounded}>
                                            <FlashOnIcon fontSize='large' style={{ color: 'black' }} />
                                        </Avatar>
                                    </CardContent>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Deploy your project
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardButtonSection}>
                                    <Button size="small" variant='contained' color="primary">
                                        Learn More
                                </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>

            </Container>
            <Footer />

        </React.Fragment>



    );
};

export default HomePage;