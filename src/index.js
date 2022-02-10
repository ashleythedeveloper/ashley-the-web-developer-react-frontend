import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Header from './components/global/Header';
import Login from './components/static_pages/Login';
import Logout from './components/static_pages/Logout';
import Signup from './components/static_pages/Signup';
import HomePage from './components/static_pages/HomePage';
import Contact from './components/static_pages/Contact';
import About from './components/static_pages/About';
import GA4React from "ga-4-react";
import Axios2 from './components/global/Axios2';
import Portfolio from './components/static_pages/Portfolio';
import BlogPost from './components/static_pages/BlogPost';
import NotFound404 from './components/global/NotFound404';
import Blog from './components/static_pages/Blog';
import ThankyouPage from './components/static_pages/ThankyouPage';
import PortfolioProject from './components/static_pages/PortfolioProject';
import TextEditor from './components/global/TextEditor';


const ga4react = new GA4React("G-CDFRJQR56Q");

(async () => {
  await ga4react.initialize();

  const rootElement = document.getElementById("root");
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <HomePage />
          </Route>
          <Route path="/editor" exact>
            <Header />
            <TextEditor />
          </Route>
          <Route  path="/login" exact>
            <Header />
            <Login />
          </Route>
          <Route path="/logout" exact>
            <Header />
            <Logout />
          </Route>
          <Route  path="/signup" exact>
            <Header />
            <Signup />
          </Route>
          <Route path="/contact" exact>
            <Header /> 
            <Contact />
          </Route>
          <Route path="/about" exact>
            <Header />
            <About />
          </Route>
          <Route path="/thank-you" exact>
            <Header />
            <ThankyouPage />
          </Route>
          <Route path="/portfolio" exact component= { () => <Axios2 endpoint={'portfolio-projects/'} component={Portfolio}/>} />
          <Route path="/portfolio/:project" exact component= { ({match}) => <Axios2 match={match} endpoint={'portfolio-project/'+match.params['project']+'/'} component={PortfolioProject}/>} />
          <Route path="/blog" exact component= { ({match}) => <Axios2 match={match} endpoint={'blogposts/'} component={Blog}/>} />       
          <Route path="/:blogPost" exact component= { ({match}) => <Axios2 match={match} endpoint={'blogposts/'} component={BlogPost}/>} />          
          <Route path="/:parent/:blogPost" exact component= { ({match}) => <BlogPost match={match} endpoint={'blogposts/'}/>} />          
          <Route Path="*" exact component={NotFound404} />
        </Switch>
        
    </Router>, rootElement);
} else {
  ReactDOM.render(
    <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <HomePage />
          </Route>
          <Route path="/editor" exact>
            <Header />
            <TextEditor />
          </Route>
          <Route  path="/login" exact>
            <Header />
            <Login />
          </Route>
          <Route path="/logout" exact>
            <Header />
            <Logout />
          </Route>
          <Route  path="/signup" exact>
            <Header />
            <Signup />
          </Route>
          <Route path="/contact" exact>
            <Header /> 
            <Contact />
          </Route>
          <Route path="/about" exact>
            <Header />
            <About />
          </Route>
          <Route path="/thank-you" exact>
            <Header />
            <ThankyouPage />
          </Route>
          <Route path="/portfolio" exact component= { () => <Axios2 endpoint={'portfolio-projects/'} component={Portfolio}/>} />
          <Route path="/portfolio/:project" exact component= { ({match}) => <Axios2 match={match} endpoint={'portfolio-project/'+match.params['project']+'/'} component={PortfolioProject}/>} />
          <Route path="/blog" exact component= { ({match}) => <Axios2 match={match} endpoint={'blogposts/'} component={Blog}/>} />       
          <Route path="/:blogPost" exact component= { ({match}) => <Axios2 match={match} endpoint={'blogposts/'} component={BlogPost}/>} />          
          <Route path="/:parent/:blogPost" exact component= { ({match}) => <BlogPost match={match} endpoint={'blogposts/'}/>} />          
          <Route Path="*" exact component={NotFound404} />
        </Switch>
    </Router>, rootElement);
    }
})();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
