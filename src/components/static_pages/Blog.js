import React from 'react';
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
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
    }
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

const Blog = ({apiData}) => {
  
  const classes = useStyles();
  return(
    <>
    <Container maxWidth='xl'>
      <MetaTags>
            <title>Blog | Ashley The Web Developer | Learn how to Code!</title>
            <meta name="description" content='Discover simple tutorials on how to code using Python and JavaScript' />
            <meta property="og:title" content='Blog | Ashley The Web Developer | Learn how to Code!' />
            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
      </MetaTags>
      <Grid container spacing={4} justify='center' className={classes.items}>
        {apiData.map((apiData) => {
          return(
            <Grid item key={apiData.blogPostTitle} xs={12} md={6} lg={4} align='center'>
              <Card raised className={classes.item}>               
              <CardActionArea component={ Link } to={apiData.blogSlug}>
              <CardMedia
                  className={classes.media}
                  image={apiData.blogPostThumbnail}
                  title="Contemplative Reptile"
                />
                
                <CardContent>
                  <Typography variant='h6' align='left' className={classes.cardTitle}>
                    {apiData.blogPostTitle}
                  </Typography>
                  <Typography variant='body1' align='left' className={classes.cardDescription}>
                  {apiData.blogPostDescription}
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardButtonArea}>
              <Button component={Link} to={apiData.blogSlug} size="small" variant='contained' color="primary" >
                  Learn More
                </Button>
                </CardActions>
                


            </Card>
          </Grid>
        )})}
      </Grid>
   </Container>

  </>
  );
};

export default Blog