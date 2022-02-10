import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import MetaTags from 'react-meta-tags';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Header from '../global/Header';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Footer from '../global/Footer';




const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '55%',
        height: '65%',
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        boxShadow: theme.shadows[5],
        outline: 'none',
        padding: theme.spacing(2, 4, 3),
        [theme.breakpoints.down('sm')]: {
            width: '75%',
            height: '45%',
            maxWidth: 650,
            maxHeight: 450,
        },
        [theme.breakpoints.up('md')]: {
            width: '75%',
            height: '45%',
            maxWidth: 800,
            maxHeight: 500,
        },
        [theme.breakpoints.up('lg')]: {
            width: '75%',
            height: '45%',
            minWidth: 700,
            minHeight: 500,
            maxWidth: 900,
            maxHeight: 500,
        },
        [theme.breakpoints.up('xl')]: {
            width: '55%',
            height: '45%',
            maxWidth: 900,
            maxHeight: 500,
        },
      },
    media:{
        width: '100%',
        height: '100%',
    },
    header: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(5),
    },
    chips: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1.5),
        color: 'white',
    },
    projectOverview: {
        paddingTop: theme.spacing(7),
    },
    techStack: {
        display: 'inline',
        paddingTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    imageGrid: {
        paddingTop: theme.spacing(10),
        justifyContent: 'center',
        align: 'center',
    },
    button: {
        marginTop: theme.spacing(4),
    },
    photosHeading: {
        paddingTop: theme.spacing(15),
    }


}));

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const PortfolioProject = (apiData) => {
    const pageData = {
        title: "Ashley The Web Developer | Portfolio Project | " + apiData.apiData.prj[0].projectName,
        description: apiData.apiData.prj[0].projectDescription,
        url: 'https://ashleythewebdeveloper.com.au'+apiData.match.url,
        image: '',
    };    
    
    const classes = useStyles()

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [imageSrc, setImageSrc] = React.useState('/');

    const handleOpen = (imageSrc) => {
        if (window.innerWidth<768){
            setOpen(false);
        }
        else{
        setImageSrc(imageSrc);
        setOpen(true);}
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <img className={classes.media} src={imageSrc} alt={apiData.apiData.prj[0].projectName}></img>
        </div>
      );

    return (
        <React.Fragment>
            <Header />
            <Container>
                {/* ------------------------------------------------ Header ------------------------------------------------ */}
                <header>
                    <MetaTags>
                        <title>{pageData.title}</title>
                        <meta name="description" content={pageData.description} />
                        <meta property="og:title" content={pageData.title} />
                        {/* <meta property="og:image" content="path/to/image.jpg" /> */}
                    </MetaTags>
                </header>
                 {/* ------------------------------------------------ Body ------------------------------------------------ */}
                <section>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h4' component='h1' align='left' className={classes.header}>
                               Project Name: {apiData.apiData.prj[0].projectName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <Typography variant='h4' component='h1' align='left' className={classes.techStack}>
                               Tech Stack
                            </Typography>
                            {apiData.apiData.prj[0].techStack.map((data) => {
                                
                                return(
                                <Chip color="primary" label={data} className={classes.chips}/>
                                );
                        })}
                        </Grid>
                        <Grid item xs={12} className={classes.heading}>
                            <Typography variant='h4' component='h2' align='left' className={classes.projectOverview}>
                                Project Overview
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' align='left'>
                                {apiData.apiData.prj[0].projectDescription}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h4' component='h2' align='left' className={classes.projectOverview}>
                                The Project
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' align='left'>
                                {apiData.apiData.prj[0].projectContent}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button component='a' href={apiData.apiData.prj[0].projectUrl} target="_blank" variant="contained" color="primary" className={classes.button}>
                                Live Link
                            </Button>
                        </Grid>
                        <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}</Modal>
                        <Grid item xs={12}>
                        <Typography variant='h4' component='h2' align='center' className={classes.photosHeading}>
                               Photos
                            </Typography>
                        </Grid>
                        {apiData.apiData.img.map((image) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <GridList cellHeight={160} className={classes.imageGrid}>
                            
                                <GridListTile key={image.img}>
                                    <img src={image.portfolioProjectImage} alt={apiData.apiData.prj[0].projectName} onClick={(src) => handleOpen(image.portfolioProjectImage)}/>
                                </GridListTile>
                            </GridList>
                        </Grid>
                        ))}
                    </Grid>
                </section>
                <Footer/>
            </Container>
        </React.Fragment>

    );

};

export default PortfolioProject