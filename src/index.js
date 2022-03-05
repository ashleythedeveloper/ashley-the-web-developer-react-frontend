import React, {useState, useEffect} from 'react';
import axiosInstance from './components/global/axiosInstance';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/global/Header';
import Login from './components/static_pages/Login';
import Logout from './components/static_pages/Logout';
import Signup from './components/static_pages/Signup';
import HomePage from './components/static_pages/HomePage';
import Contact from './components/static_pages/Contact';
import About from './components/static_pages/About';
import GA4React from "ga-4-react";
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
            <HomePage />
          </Route>
          <Route path="/editor" exact>
            <Header />
            <TextEditor />
          </Route>
          <Route  path="/login" exact>
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
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/portfolio/:project" exact>
            <PortfolioProject />
          </Route>
          {/* <Route path="/blog" exact>
            <Blog />  
          </Route>       
          <Route path="/:blogPost" exact>
            <BlogPost />
          </Route>         
          <Route path="/:parent/:blogPost" exact>
          <BlogPost match={match} endpoint={'blogposts/'}/>
            </Route>           */}
          <Route Path="*" exact component={NotFound404} />
        </Switch>
        
    </Router>, rootElement);
} else {
  ReactDOM.render(
    <Router>
        <Switch>
        <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/editor" exact>
            <Header />
            <TextEditor />
          </Route>
          <Route  path="/login" exact>
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
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/portfolio/:project" exact>
            <PortfolioProject />
          </Route>
          {/* <Route path="/blog" exact>
            <Blog />  
          </Route>       
          <Route path="/:blogPost" exact>
            <BlogPost />
          </Route>         
          <Route path="/:parent/:blogPost" exact>
          <BlogPost />
            </Route>           */}
          <Route Path="*" exact component={NotFound404} />
        </Switch>
    </Router>, rootElement);
    }
})();

