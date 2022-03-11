import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../global/axiosInstance';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import TabPanel from '../global/TabPanel';
import GetPortfolioProjects from '../global/GetPortfolioProjects';
import DisplayCardGrid from '../global/DisplayCardGrid';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    marginTop: theme.spacing(10)
  },
  cardContainer: {
    paddingBottom: theme.spacing(10)
  }
}))

const AdminArea = () => {
  const history = useHistory();
  const classes = useStyles();

  const [tabState, setTabState] = useState(0);

  useEffect(() => {
    axiosInstance.get('auth/is-user/', {withCredentials: true})
    .then((res) => {
      console.log("Logged in")
    })
    .catch((err) => {
      history.push('/login')
    })
  }, [])

  const handleTabChange = (event, newValue) => {
    setTabState(newValue);
  }


  return (
    <>
    <Container maxWidth={'md'} className={classes.rootContainer}>
      
      <Box>
      <Card raised className={classes.cardContainer}>
        <Tabs value={tabState} onChange={handleTabChange} indicatorColor={'primary'}>
          <Tab label={'Pages'} />
          <Tab label={'Projects'} />
        </Tabs>
        <TabPanel value={tabState} index={0}>
        </TabPanel>
        <TabPanel value={tabState} index={1}>
            <GetPortfolioProjects>
              <DisplayCardGrid />
            </GetPortfolioProjects>
        </TabPanel>
        </Card>
      </Box>

    </Container>
    </>
  )
};

export default AdminArea