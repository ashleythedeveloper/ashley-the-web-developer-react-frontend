import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rootContainer:{
    display: 'flex',
    justifyContent: 'center',
  },
    headingContainer: {
      marginTop: theme.spacing(10),
    },
    heading: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(3)
    },
    section: {
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
    paragraph: {
    },
    listGrid: {
      marginTop: theme.spacing(2),
    },
    list: {
    },
    listItems: {
      paddingBottom: theme.spacing(2),
    },
  }
))


const TermsOfUse = () => {
  const classes = useStyles();
  return(
    <>
    <Container className={classes.rootContainer}>
      <Grid item xs={10} className={classes.headingContainer}>
        <Grid item xs={12} className={classes.section}>
        <Typography variant={'h3'} component={'h1'} align={'center'} className={classes.heading}>
          Terms of Use
        </Typography>
        <Typography variant={'body1'} align={'center'} className={classes.paragraph}>
          Please read these terms and conditions carefully before using my site.
        </Typography>
        </Grid>
        <Typography component={'h2'} variant={'h4'} className={classes.heading}>
          Interpretation and Definitions
        </Typography>
        <Grid item xs={12} className={classes.section}>
        <Typography component={'h3'} variant={'h5'} className={classes.heading}>
        Interpretation
        </Typography>
        <Typography variant={'body1'} align={'left'} className={classes.paragraph}>
        The words of which the initial letter is capitalized have meanings defined under the following conditions.
        <br/><br/>
        The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
        <Typography component={'h3'} variant={'h5'} className={classes.heading}>
        Definitions
        </Typography>
        <Typography variant={'body1'} align={'left'} className={classes.paragraph}>
        For the purposes of these Terms and Conditions:
        </Typography>
        <Typography variant={'body1'} align={'left'} className={classes.paragraph}>
          <Grid item xs={12} className={classes.listGrid}>
          <ul className={classes.list}>
            <li className={classes.listItems}>
            <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
            </li>
            <li className={classes.listItems}>
            <strong>Company</strong> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to AshleyTheWebDeveloper.
            </li>
            <li className={classes.listItems}>
            <strong>Service</strong> refers to the Website.
            </li>
            <li className={classes.listItems}>
            <strong>Terms and Conditions</strong> (also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.
            </li>
            <li className={classes.listItems}>
            <strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
            </li>
            <li className={classes.listItems}>
            <strong>Website</strong> refers to AshleyTheWebDeveloper, accessible from https://ashleythewebdeveloper.com.au
            </li>
            <li className={classes.listItems}>
            <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </li>
          </ul>
          </Grid>
        </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
        <Typography component={'h2'} variant={'h4'} className={classes.heading}>
          Acknowledgement
        </Typography>
        <Typography variant={'body1'} align={'left'} className={classes.paragraph}>
        These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        <br/><br/>
        Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        <br/><br/>
        By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
        <br/><br/>
        Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
        </Typography>
        </Grid>
      </Grid>
      
    </Container>
    </>
  )
};

export default TermsOfUse