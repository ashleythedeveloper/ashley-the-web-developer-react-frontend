import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) =>({
    heroParagraph: {
        fontSize: "1.3rem",
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(7),
    },
    heading2: {
        paddingTop: theme.spacing(14),
    },
    paragraph: {
        fontSize: "1.3rem",
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(4),
    },


}));


const AboutContent = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid item xs={11} xl={12} className={classes.paragraphItem}>
                <Typography align="center" varient="body1" className={classes.heroParagraph}>
                Hi, my name is Ashley and I like business and I love to solve problems with code.
                Programming for me gives me the ability to quench my thirst for learning while also giving me the satisfaction of taking a problem and solving it with code and I find the combination of both very stimulating and rewarding.
                <br /> <br />
                I love programming and it genuinely makes me happy.
                </Typography>
            </Grid>
            <Grid item xs={11} xl={12} className={classes.heading2}>
                <Typography variant="h4" align="left" component="h2" >
                    How I Started
                </Typography>
            </Grid>
            <Grid item xs={11} xl={12} className={classes.paragraphItem}>
                <Typography variant="body1" align="left" className={classes.paragraph}>
                    My coding journey started back in 2016. When I took the plunge and started my own business in the gardening industry. 
                    While operating and growing that business, problems would present themselves which I could then use code to solve the problem.
                    <br /> <br />
                </ Typography>
                < Typography variant="h4" align="left" component="h2" className={classes.heading2}>
                    The Problem 
                </ Typography>
                <Typography variant="body1" align="left" className={classes.paragraph}>
                    One of the problems was presenting before and after photos in a professional manner to clients in the gardening business. 

                    I would need to manually download 40+ photos one by one from the CRM I was using. This process would require opening 2 tabs per photo. I would then need to resize each photo as each photo was 6-10MB each and Gmail will only let you send 25MB per email. 
                    <br /> <br />

                    Once each photo was resized I would then need to rename each photo with the address of the property. Once that was completed, I would then need to create a folder with the street address as the file name, transfer all of the files into that folder and then finally compress that folder ready to send.
                    <br /> <br />

                    This process would take 30-40mins each job and we would need to do this every 4 days or so.
                    <br /> <br />
                    </ Typography>
                    < Typography variant="h4" align="left" component="h2" className={classes.heading2}>
                        How I Solved The Problem 
                    </ Typography>
                    <Typography variant="body1" align="left" className={classes.paragraph}>
                    In my free time I had started learning the basics of python but always got bored of the basic string manipulation, adding items to lists, etc. 
                    One weekend I thought I would give it ago and began coding. The first iteration worked but it was soooooo bad. 
                    <br /> <br />

                    For example, I needed to make a request to the CRM API with basic authentication. Then filter customer results based on a job number. Once the API returned the object for that job number I then needed to get the address and the list of unique ids for each file associated with that job number as the CRM also stored invoice/quote pdfs in the same location.
                    <br /> <br />

                    Where it was bad was to get the address I was turning the object into a string than iterating through that string looking for the word "address" and then splitting the entire stringified object to get the address 😅
                    <br /> <br />

                    If you're not a programmer, this is bad. Once I refactored the code on the second iteration, I was then accessing this information via the keys of the object 😁
                    <br /> <br />

                    Once I had all of the information I needed I used some logic to filter out the pdfs and then downloaded all of the images. I then used the library pillow to resize the images. I then iterated over the list of images to change the file names.
                    <br /> <br />

                    Once that was all done I then created a new folder with the address as the file name and then moved all of the files over and finally compressed the folder.
                    When I actually ran this completed program for the first time I WAS HOOKED. I couldn't believe that it worked and the whole process took less than a minute!
                    <br /> <br />
                    </ Typography>
                    < Typography variant="h4" align="left" component="h2" className={classes.heading2}>
                        The Outcome 
                    </ Typography>
                    <Typography variant="body1" align="left" className={classes.paragraph}>
                    This small little script ended up saving us over $1000 every year and the agony of manually completing this task.
                    <br /> <br />
                    
                    From there, the projects I was building required databases and graphical user interfaces so I began learning HTML/Django and later adding JavaScript and React to my tech stack along with deploying my projects using Nginx and Gunicorn.
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.paragraph}>
                    <br />
                    Check out the other projects that I have created<br />by clicking the button below.
                </Typography>   
            </Grid>
            <Grid item xs={11} xl={12} align="center" >
                <Button component={Link} to="/portfolio" variant="contained" color="primary">
                    More Projects
                </Button>
            </Grid>
        </div>
    );
};

export default AboutContent