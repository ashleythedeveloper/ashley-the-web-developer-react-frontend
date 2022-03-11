import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Loader from '../global/Loader';
import axiosInstance from '../global/axiosInstance';




const useStyles = makeStyles((theme) => ({

  item: {
    maxWidth: 400,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
    minHeight: 330,
    height: '94%'
  },

  items: {
    paddingTop: theme.spacing(20),
  },

  media: {
    height: 0,
    paddingTop: '56.25%',

  },
  cardDescription: {
    paddingTop: theme.spacing(2)
  },
  cardTitle: {
    paddingTop: theme.spacing(2)
  },
  cardButtonArea: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  }

}));

const DisplayCardGrid = (props) => {

  console.log(props)
  const [projects, setProjects] = useState(props.data)

  const classes = useStyles();


    return (
        <Container maxWidth='xl'>
          <MetaTags>
            <title>Portfolio Projects | Ashley The Web Developer</title>
            <meta name="description" content='Check out the projects that I have created. From full web apps to...' />
            <meta property="og:title" content='Portfolio Projects | Ashley The Web Developer' />
            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
          </MetaTags>
          <Grid container spacing={4} justifyContent='center' className={classes.items}>
            
            {projects.map((apiData) => {
              return (
                <Grid item key={apiData.project_title} xs={12} md={6} lg={4} align='center'>
                  <Card raised className={classes.item}>
                    <CardActionArea component={Link} to={`/admin-area/project/${apiData.slug}`}>
                      <CardMedia
                        className={classes.media}
                        image={`https://ashleythewebdeveloper.s3.ap-southeast-2.amazonaws.com/${apiData.main_project_image}`}
                        title={apiData.project_title}
                      />
                      <CardContent>
                        <Typography variant='h6' align='left' className={classes.cardTitle}>
                          {apiData.project_title}
                        </Typography>
                        <Typography variant='body1' align='left' className={classes.cardDescription}>
                          {apiData.meta_description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardButtonArea}>
                      <Button size="small" variant='contained' color="primary" component={Link} to={`/admin-area/project/${apiData.slug}`}>
                        Edit Project
                </Button>
                <Button size="small" variant='contained' color="secondary" component={Link} to={'#'}>
                        Delete Project
                </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
    );
};

export default DisplayCardGrid