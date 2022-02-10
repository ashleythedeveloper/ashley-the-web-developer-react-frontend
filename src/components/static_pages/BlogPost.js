import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../global/Header';
import Axios2 from '../global/Axios2';
import Blogposts2 from './BlogPosts2';
import Footer from '../global/Footer';


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
  // img: {
  //   width: '100%',
  //   height: 'auto',
  // },

  content: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
 

}));

const BlogPost = ({match, endpoint}) => {
  const classes = useStyles();
    return (
      <>
      <Header />
    <Container maxWidth='xl'>
      <div className={classes.containers}>
      <Axios2 match={match} endpoint={endpoint} component={Blogposts2}/>
      </div>
   </Container>
   </>
    );
  };

export default BlogPost