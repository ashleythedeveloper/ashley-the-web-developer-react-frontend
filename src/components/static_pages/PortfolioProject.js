import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import {useParams} from 'react-router-dom';
import Loader from '../global/Loader';
import axiosInstance from '../global/axiosInstance';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Dialog from '@material-ui/core/Dialog';
import ReactMarkdown from "react-markdown";






const useStyles = makeStyles((theme) => ({
    cardContainer: {
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(10),
        borderRadius: 20,
        overflow: 'visible'
    },
    header: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(3),
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
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
        

    },
    button: {
        marginTop: theme.spacing(4),
        marginRight: 15
    },
    photosHeading: {
        paddingTop: theme.spacing(15),
    },
   


}));


const PortfolioProject = () => {

    const defaultLoadingState = {isLoading: true, loadingMessage: 'Fetching the project. One moment.'};

    const [loading, setLoading] = useState(defaultLoadingState);


    const [projectData, setProjectData] = useState();

    const {project} = useParams();

    useEffect(() => {
        axiosInstance.post('project/', {slug: project})
        .then((res) => {
            setProjectData(res.data);
            setLoading({...loading, isLoading: false})
        })
        .catch((err) => {
            console.log(err)
            setLoading({...loading, isLoading: false})
        })
    }, [])


    
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [imageSrc, setImageSrc] = React.useState('/');

    const handleOpen = (imageSrc) => {
        setImageSrc(imageSrc);
        setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
      
        if (loading.isLoading) {
            return (
            <>
            <Loader message={loading.loadingMessage}/>
            </>
            )
        } else {
    return (
        <React.Fragment>
            <Container maxWidth={'md'}>
                
                <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Typography variant='h4' component='h1' align='left' className={classes.header}>
                               {projectData.project.project_title}
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            {projectData.projectTechStack.map((data) => {
                                return(
                                <Chip key={data.id} color="primary" label={data.tech_name} className={classes.chips}/>
                                );
                        })}
                        </Grid>
                        <Grid item xs={10} className={classes.heading}>
                            <Typography variant='h5' component='h2' align='left' className={classes.projectOverview}>
                                Summary
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant='body2' align='left'>
                                {projectData.project.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant='h5' component='h2' align='left' className={classes.projectOverview}>
                                About The Project
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                        <ReactMarkdown>
                        {projectData.project.content}
                        </ReactMarkdown>
                        </Grid>
                        <Grid item xs={10}>
                        <Button component='a' href={projectData.project.project_repo} target="_blank" variant="contained" color="primary" className={classes.button}>
                                Project Repo
                            </Button>
                            <Button component='a' href={projectData.project.project_link} target="_blank" variant="outlined" color="primary" className={classes.button}>
                                Live Project
                            </Button>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                        </Grid>
                        <Dialog open={open} onClose={handleClose} >
                        <img className={classes.media} src={imageSrc} alt={projectData.project.project_title}/>
                        </Dialog>
                        
                        <Grid item xs={12}>
                        <Typography variant='h4' component='h2' align='center' className={classes.photosHeading}>
                               Photos
                            </Typography>
                        </Grid>
                        <Grid item className={classes.imageGrid} align={'center'}>
                        {projectData.projectImages.map((image) => (
                        
                            <Grid item xs={12} key={image.id}>
                                    <img 
                                        srcSet={`https://ashleythewebdeveloper.s3.ap-southeast-2.amazonaws.com/scaled/300/${image.image_url}-300.webp 300w, 
                                        https://ashleythewebdeveloper.s3.ap-southeast-2.amazonaws.com/scaled/768/${image.image_url}-768.webp 768w`}
                                        sizes="(max-width: 768px) 180px, 400px"
                                        alt={projectData.project.project_title} 
                                         />
                                </Grid>
                        ))}
                        </Grid>
                        </Grid>
                
            </Container>
        </React.Fragment>

    );
                        }
};

export default PortfolioProject