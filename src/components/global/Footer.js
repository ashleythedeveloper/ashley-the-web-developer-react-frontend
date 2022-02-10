import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Copyright from './Copyright';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import BusinessIcon from '@material-ui/icons/Business';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
    footerItem: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    footerItemText: {
      display: 'flex',
      fontWeight: 'bold',
    },
    footerItemList: {
        listStyleType: 'none',
        textDecoration: 'none',
        

    },
    footerItemLink: {
      textDecoration: 'none',
      color: 'black',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',},
    },
    footerContact: {
      margin: 0,
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        textAlign:'center',
      }
    },
    footerContactText: {
      display: 'inline', 
         
    },
    footerContactButton: {
      paddingRight: '.8rem',
      marginBottom: -5,
      paddingTop: 12,
    },
    footerContactHeading: {
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      },
    },
    ul: {
      [theme.breakpoints.down('sm')]: {
        paddingInlineStart: 0,
      },
    },

  }));
  

const footerNav = [
    {
      title: 'Menu',
      description: ['Home','Portfolio', 'Contact', 'About', 'Blog'],
    },
    {
      title: 'Privacy',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

const LinkGenerator = (link) =>{
    const lowerLink = link.toLowerCase();
    let cleanedLink = lowerLink.replace(/\s/g, '-')
    if (cleanedLink === 'home'){
      cleanedLink = ''
    }

    return '/' + cleanedLink
}

const Footer = () => {
    const classes = useStyles();

    return(
    <Container maxWidth={'lg'}>
        <Grid container justifyContent='center' spacing={4} className={classes.footer}>
          {footerNav.map((footerItem) => (
            <Grid item xs={12} sm={4} key={footerItem.title} className={classes.footerItem}>
            <Typography className={classes.footerItemText} >
              {footerItem.title}
            </Typography>
            <ul className={classes.ul}>
              {footerItem.description.map((footerDescription) => (
                <li key={footerDescription} className={classes.footerItemList}>
                  <Link to={LinkGenerator(footerDescription)} className={classes.footerItemLink} >
                    <Typography>
                    {footerDescription}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
            </Grid>
          ))}
        <Grid item md={4}  className={classes.footerContact}>
          
          <div>
          <Typography className={classes.footerContactHeading}>Contact</Typography>
          <CallIcon className={classes.footerContactButton}/>
                <Typography className={classes.footerContactText}>
                  <a href='tel:0478970416' style={{textDecoration: 'none', color: 'black'}}>
                  0478 970 416
                  </a>
                </Typography>
                </div>
                <div>
            <EmailIcon className={classes.footerContactButton}/>
              <Typography className={classes.footerContactText}>
                ashley@ashleythewebdeveloper.com.au
              </Typography>
              </div>
              <div>
           <BusinessIcon className={classes.footerContactButton}/>
           
              <Typography className={classes.footerContactText}>
                Worldwide
              </Typography>
              </div>
              <div style={{ paddingTop: '1rem'}}>
              <IconButton href="https://github.com/ashleythewebdeveloper" target="_blank">
                <GitHubIcon style={{ color: '#333', fontSize:40}}/>
              </IconButton>
              <IconButton href="https://twitter.com/AshleyH09182256" target="_blank">
                <TwitterIcon style={{ color: '#00acee', fontSize:40}}/>
              </IconButton>
              <IconButton href="https://www.youtube.com/channel/UCWSq2RrvwW1AvnlKUhxq1hg" target="_blank">
                <YouTubeIcon style={{ color: '#c4302b', fontSize:40}}/>
              </IconButton>
                </div> 
        </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    )
};

export default Footer;