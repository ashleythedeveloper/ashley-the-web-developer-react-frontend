import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
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
                    Hi, my name is Ashley and I love to solve problems with code.
                <br /><br />
                I have used a few programming languages & frameworks
                <br />
                and have gravitated towards Javascript, React and Node.js.
                <br /><br />
                Programming for me gives me an outlet to creatively express myself,
                <br />
                be mentally stimulated and satisfy my inquisitive nature.
                <br /> <br />
                I love being able to rapidly solve real problems.
                </Typography>
            </Grid>
            <Grid item xs={11} xl={12} className={classes.heading2}>
                <Typography variant="h4" align="left" component="h2" >
                    The problem that got me started
                </Typography>
            </Grid>
            <Grid item xs={11} xl={12} className={classes.paragraphItem}>
                <Typography variant="body1" align="left" className={classes.paragraph}>
                    My coding journey started back in 2016 when I took the plunge and started my own business in the home services industry.
                    <br /> <br />
                    One of the issues I faced during this time was scaling one of our competive advantages.
                    It was pretty simple, I would send high quality before and after photos of the work we completed
                    to the client. This required manually downloadng each image from the CRM I was using (ServiceM8).
                    <br /> <br />
                    I would then resize the images due to the sheer size of the final folder as each image was around 4MB and each job had 20+ photos associated with it.
                    <br /> <br />
                    Once I had all of the resized photos in the one folder,
                    I would then proceed to rename the photos with the address of the property and a number at the end that would increment with each photo.
                    <br /> <br />
                    Once that was completed, I would then change the name of the folder to the address of the property and compress the final folder and send it off to the client.
                    <br /> <br />
                    The problem was, I had to download each photo individually. I was unable to select all of the images and download them at once using the CRM and then the issue of the format of the images.
                    <br /> <br />
                    This process would take 5-10 mins for each job. This became a nighmare when I scaled the business which resulted in this process taking hours out of my week.
                    </ Typography>
                < Typography variant="h4" align="left" component="h2" className={classes.heading2}>
                    How I solved the problem
                    </ Typography>
                <Typography variant="body1" align="left" className={classes.paragraph}>
                    In my free time I was starting to learn the basics of Python but I would always get bored doing the basic string manipulation and adding items to lists.
                    <br /><br />
                    One weekend, I thought I would try somthing a little harder and use the skills I had aquired with python to solve this problem I was having with the images.
                    <br /> <br />
                    After a couple of weeks I had the first iteration working but the implamentation was really bad.
                    <br /> <br />

                    For example, I needed to make a request to the CRM's API with basic authentication.
                    Once I was authenticated I would make a request to retrive a spasific job number that I provided via the terminal.
                    <br/><br/>
                    Once the API returned the object for that job number I then needed to get the address and the list of unique ids for each file associated with that job number
                    as the CRM also stored invoice/quote pdfs in the same location.
                    </ Typography>

                    < Typography variant="h4" align="left" component="h2" className={classes.heading2}>
                    Where I went wrong
                    </ Typography>
                <Typography variant="body1" align="left" className={classes.paragraph}>
                    <br />
                    Where I went wrong with the implamentation was getting the address and UUID's. <br /> <br />
                    The server would return the JSON object with the data I needed but it was a sting.
                    Not knowing I needed to convert it to an object I was iterating through that string looking for the word "address" and "uuid" and then splitting the entire string to get the address and uuid's 😅
                    <br /> <br />

                    If you're not a programmer, this would have to be the worst way to get data from an object. Once I refactored the code I was then accessing this information via the keys of the object 😁
                    <br /> <br />

                    Once the program had all of the information it needed it then used some logic to filter out the pdfs that were stored with the images.
                    It then proceeded to download all of the images. Once all of the images were downloaded it then used the library pillow to resize the images to the desired size.
                    Once the resizing was completed It then iterated over the list of images and changed the file names to the address with the trailing incrementing number.
                    <br /> <br />

                    Once that was all done it then created a new folder with the address as the folder name and then moved all of the files into that folder and finally compressed the folder.
                    <br /><br />
                    When I actually ran this completed program for the first time and it exacuted it flawlessly, I WAS HOOKED.
                    <br /><br/>
                    I couldn't believe that it worked and the program took less than a minute to complete the task!
                    </ Typography>
                < Typography variant="h4" align="left" component="h2" className={classes.heading2}>
                    The outcome
                    </ Typography>
                <Typography variant="body1" align="left" className={classes.paragraph}>
                    This small little script ended up saving me over $1000 every year in unproductive wages and the agony of having to manually completing this task.
                    <br /> <br />

                    From there, I was hooked. The projects I started building required databases and graphical user interfaces so I began learning HTML, CSS and Django and continued to improve month by month and building more complex applications.
                    <br /><br />In recent years I have gravitated towards using Javascript, React, Node.js and PostgreSQL as my prefered stack.

                    I'm really glad I perservered those first weeeks of programming as I wouldn't have found my passion in life.
                    </Typography>
                <Typography variant="body1" align="center" className={classes.paragraph}>
                    <br />
                    Check out the other projects that I have created<br />by clicking the button below.
                    <br /><br />
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