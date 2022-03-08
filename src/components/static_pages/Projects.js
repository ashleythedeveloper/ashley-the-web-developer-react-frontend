import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../global/axiosInstance';
import Loader from '../global/Loader';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';
import TextEditor from '../global/TextEditor';
import Chip from '@material-ui/core/Chip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  containerGridItem: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5)
  },
  formField: {
    width: '70%',
  },
  formLabel: {
    paddingTop: '1rem',
    marginRight: '1rem'
  },
  formGridItem: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    paddingBottom: theme.spacing(2)
  },
  techStackGridItem: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    paddingBottom: theme.spacing(2)
  },
  publishedGridItem: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    paddingBottom: theme.spacing(2)
  }
}))


const Projects = () => {
  const { project } = useParams();

  const classes = useStyles();

  const defaultLoadingState = { isLoading: true, loadingMessage: 'Fetching the project. One moment.' };

  const [loading, setLoading] = useState(defaultLoadingState);


  const [projectData, setProjectData] = useState();


  useEffect(() => {
    axiosInstance.post('project/', {slug: project})
      .then((res) => {
        setProjectData(res.data);
        setLoading({ ...loading, isLoading: false })
      })
      .catch((err) => {
        console.log(err)
        setLoading({ ...loading, isLoading: false })
      })
  }, []);
  const handleFormChange = (e) => {

  };

  const handleFormSubmit = (e) => {
    e.prevenDefault();

  }; 

  const handleTechChipDelete = (e) => {
    let newTechList = []
    for (let i=0; i < projectData.projectTechStack.length; i++) {
      if (projectData.projectTechStack[i].id !== e) {
        newTechList.push(projectData.projectTechStack[i]);
      };
    }
    let newProjectData = {...projectData}
    newProjectData.projectTechStack = newTechList
    setProjectData(newProjectData);
  };

  const handleIsPublishedChange = (e) => {
    let newProjectData = {...projectData}

    if (projectData.project.published) {
      newProjectData.project.published = false
    } else {
      newProjectData.project.published = true
    }
    setProjectData(newProjectData);
  };

  const handleContentUpdate = (content) => {
    let newProjectData = {...projectData}
    newProjectData.project.content = content;
    setProjectData(newProjectData);
    console.log(projectData.project.content)
  } 

  console.log(projectData)
  if (loading.isLoading) {
    return <Loader message={loading.message} />
  } else {
    return (
      <>
      <Container maxWidth={'md'}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.containerGridItem}>
            <Box component={'form'} onChange={handleFormChange} onSubmit={handleFormSubmit} className={classes.formField}>
            <Grid item xs={12} className={classes.formGridItem}>
              <Typography variant={'body1'} className={classes.formLabel}>
                Project Slug
              </Typography>
              <TextField
              fullWidth
                variant={'outlined'}
                value={projectData.project.slug}
                onChange={handleFormChange} />
              
            </Grid>
            <Grid item xs={12} className={classes.formGridItem}>
              <Typography variant={'body1'} className={classes.formLabel}>
                Project Title
              </Typography>
              <TextField
              fullWidth
                variant={'outlined'}
                value={projectData.project.project_title}
                onChange={handleFormChange} />
              
            </Grid>
            <Grid item xs={12} className={classes.formGridItem}>
              <Typography variant={'body1'} className={classes.formLabel}>
                Project Description
              </Typography>
              <TextField
              fullWidth
                variant={'outlined'}
                value={projectData.project.description}
                onChange={handleFormChange} />
              
            </Grid>
            <Grid item xs={12} className={classes.formGridItem}>
              <Typography variant={'body1'} className={classes.formLabel}>
                Project Link
              </Typography>
              <TextField
              fullWidth
                variant={'outlined'}
                value={projectData.project.project_link}
                onChange={handleFormChange} />
              
            </Grid>
            <Grid item xs={12} className={classes.formGridItem}>
              <Typography variant={'body1'} className={classes.formLabel}>
                Project Repo
              </Typography>
              <TextField
              fullWidth
                variant={'outlined'}
                value={projectData.project.project_repo}
                onChange={handleFormChange} />
              
            </Grid>
            <Grid item xs={12} className={classes.formGridItem}>
              <Typography variant={'body1'} className={classes.formLabel}>
                Project Image
              </Typography>
              <TextField
              fullWidth
                variant={'outlined'}
                value={projectData.project.main_project_image}
                onChange={handleFormChange} />
            </Grid>
            <Grid item xs={12} className={classes.formGridItem}>
              <Typography variant={'body1'} className={classes.formLabel}>
                Meta Title
              </Typography>
              <TextField
              fullWidth
                variant={'outlined'}
                value={projectData.project.meta_title}
                onChange={handleFormChange} />
            </Grid>
            <Grid item xs={12} className={classes.formGridItem}>
              <Typography variant={'body1'} className={classes.formLabel}>
                Meta Description
              </Typography>
              <TextField
              fullWidth
                variant={'outlined'}
                value={projectData.project.meta_description}
                onChange={handleFormChange} />
            </Grid>
            <Grid item xs={12} className={classes.techStackGridItem}>
              <Typography variant={'body1'} className={classes.formLabel}>
                Tech Stack
              </Typography>
                {projectData.projectTechStack.map((tech) => {
                   
                   return <Chip color={'primary'} key={tech.id} label={tech.tech_name} onDelete={(e) => {handleTechChipDelete(tech.id)}} />

                })}
                <Button onClick={()=>{}}>
                <AddCircleIcon />
                </Button>
            </Grid>
            <Grid item xs={12} className={classes.publishedGridItem}>
              <Typography variant={'body1'} className={classes.formLabel}>
                Published
              </Typography>
              <Switch
        checked={projectData.project.published}
        onChange={handleIsPublishedChange}
        color="primary"
        name="isPublished"
      />
            </Grid>
            <Grid item xs={12} className={classes.formGridItem}>
              <Typography variant={'body1'} className={classes.contentLabel}>
                Content
              </Typography>
              <TextEditor content={projectData.project.content} updateContent={handleContentUpdate}/>
            </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
      </>
    )
  }
};

export default Projects