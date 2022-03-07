import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MetaTags from 'react-meta-tags';
import NotFound404 from '../global/NotFound404';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({

  container: {
    paddingTop: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(10),
    }
  },

  heading: {
    paddingTop: theme.spacing(2)
  },

  description: {
    paddingTop: theme.spacing(2)
  },

  image: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(6),
    
  },
  img: {
    width: 395,
    height: 241,
  },
  imgres: {
    width: 395,
    height: 241,
    backgroundColor: 'gray',
  },

  content: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  }

}));


const BlogPosts2 = ({match, apiData}) => {
  

  const index = apiData.findIndex(x => x.blogSlug === match.url)
  const classes = useStyles();
  const [resimage, setresimage] = useState(<div className={classes.imgres}></div>)
  const click = () => {
    setresimage(<div style={{'display': 'none'}}></div>)
   }

  if (index === -1)
      {
      return (   
          <React.Fragment>
            <NotFound404 />
          </React.Fragment>
      );
    };
    return (
      <>
      <Container maxWidth={'xl'}>
      <MetaTags>
            <title>{apiData[index].blogPostTitle}</title>
            <meta name="description" content={apiData[index].blogPostDescription}/>
            <meta property="og:title" content={apiData[index].blogPostTitle} />
            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
      </MetaTags>
      <Grid container spacing={4} justify='center' className={classes.container}>
      <Grid className={classes.image} item xs={10} sm={6} lg={5}>
        {resimage}
        <img id='123' className={classes.img} src={apiData[index].blogPostThumbnail} alt={apiData[index].blogPostTitle} onLoad={click}></img>
        </Grid>
        <Grid item xs={11} sm={8}>
        <div contentEditable='true' dangerouslySetInnerHTML={{ __html: apiData[index].blogPostContent }}></div>
        </Grid>
          </Grid>
          </Container>
   </>
    );
  };

export default BlogPosts2