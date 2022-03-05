import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import CancelIcon from '@material-ui/icons/Cancel';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EmailIcon from '@material-ui/icons/Email';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    background: 'white'
  },
  toolbarTitle: {
    paddingLeft: '1rem',
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: '0rem',
      flexGrow: 1,
    }

  },
  titleLink: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",

    }
  },
  menuIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: 'inline',
    }
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.complex,
    }),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerCloseIcon: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  drawerLinks: {
    paddingTop: theme.spacing(1),
  },
  drawerSocialIcons: {
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(0.5),
  }
}));

const Header = ({isUserLoggedIn, isLoading}) => {
  const classes = useStyles();

  const [drawState, setDrawState] = useState(false);

  const [loading, setloading] = useState(isLoading)

  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn)

  const handleDrawOpen = () => {
    setDrawState(true);
  };

  const handleDrawClose = () =>{
    setDrawState(false);
  };
  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn)
    setloading(isLoading)
  }, [isUserLoggedIn, isLoading])

  let desktop;
  let mobile;

  if (!isLoggedIn){
    
    desktop=
      <>
      <Link to="/signup" className={classes.link}>
      <Button color="primary" variant="contained">Signup</Button>
      </Link>
      <Link to="/login" className={classes.link}>
      <Button color="primary" variant="outlined" >Login</Button>
      </Link>
      </>;

    mobile =
    <>
      <ListItem button component={ Link } to='/login' onClick={handleDrawClose}>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Login"/>
            </ListItem>
    </>
  } 
  else{
    desktop=
    <>
    <Link to="/logout" className={classes.link}>
    <Button color="primary" variant="outlined" >Logout</Button>
    </Link>
    </>;

    mobile =
    <>
            <ListItem button component={ Link } to='/logout' onClick={handleDrawClose}>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Logout"/>
            </ListItem>
    </>
    };
    if (loading) {
      return (
        <>
        </>
      )
    } else {
  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.toolbarTitle}>
          <Link to="/" className={classes.titleLink}>
            Ashley Harwood
        </Link>
        </Typography>
        <nav>
          <Typography>
            <Link variant="button" color="textPrimary" to="/portfolio" className={classes.link}>
              Portfolio
          </Link>
            <Link variant="button" color="textPrimary" to="/contact" className={classes.link}>
              Contact
          </Link>
            <Link variant="button" color="textPrimary" to="/about" className={classes.link}>
              About
          </Link>
          {/* The blog component will be added at a later date */}
            {/* <Link variant="button" color="textPrimary" to="/blog" className={classes.link}>
              Blog
          </Link> */}
          </Typography>
        </nav>
       
        {desktop}
        
        <IconButton 
          className={classes.menuIcon}
          onClick={handleDrawOpen} >
          <Menu />
        </IconButton>
        <Drawer
          className={classes.drawer}
          anchor="right"
          open={drawState}
          classes={{
            paper: classes.drawerPaper,
          }}>
            <div className={classes.drawerCloseIcon}>
            <IconButton
              onClick={handleDrawClose}>
              <CancelIcon />
            </IconButton>
            </div>
            <div className={classes.drawerLinks}>
            <ListItem button component={ Link } to='' onClick={handleDrawClose}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home'/>
            </ListItem>
            <ListItem button component={ Link } to='/portfolio' onClick={handleDrawClose}>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="Portfolio"/>
            </ListItem>
            <ListItem button component={ Link } to='/contact' onClick={handleDrawClose}>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact"/>
            </ListItem>
            <ListItem button component={ Link } to='/about' onClick={handleDrawClose}>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="About"/>
            </ListItem>
            {/* The blog component will be added at a later date */}
            {/* <ListItem button component={ Link } to='/blog' onClick={handleDrawClose}>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="Blog"/>
            </ListItem> */}
            {mobile}
            </div>
            <div className={classes.drawerSocialIcons}>
              <IconButton href="https://github.com/ashleythewebdeveloper" target="_blank">
                <GitHubIcon style={{ color: '#333', fontSize:35}}/>
              </IconButton>
              <IconButton href="https://twitter.com/AshleyH09182256" target="_blank">
                <TwitterIcon style={{ color: '#00acee', fontSize:40}}/>
              </IconButton>
              <IconButton href="https://www.youtube.com/channel/UCWSq2RrvwW1AvnlKUhxq1hg" target="_blank">
                <YouTubeIcon style={{ color: '#c4302b', fontSize:40}}/>
              </IconButton>
            </div>
          </Drawer>
      </Toolbar>
    </AppBar>
  )}
};

Header.defaultProps = {
  isUserLoggedIn : false
}

export default Header;