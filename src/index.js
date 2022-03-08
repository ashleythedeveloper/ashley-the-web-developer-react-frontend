import React from 'react';
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
import NotFound404 from './components/global/NotFound404';
import ThankyouPage from './components/static_pages/ThankyouPage';
import PortfolioProject from './components/static_pages/PortfolioProject';
import TextEditor from './components/global/TextEditor';
import Footer from './components/global/Footer';
import TermsOfUse from './components/static_pages/TermsOfUse';
import AdminArea from './components/static_pages/AdminArea';


const ga4react = new GA4React("G-CDFRJQR56Q");


(async () => {
  await ga4react.initialize();

  const rootElement = document.getElementById("root");
  
  ReactDOM.render(
    <Router>
      <Header />
        <Switch>
        <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/editor" exact>
            <TextEditor />
          </Route>
          <Route  path="/login" exact>
            <Login />
          </Route>
          <Route path="/logout" exact>
            <Logout />
          </Route>
          <Route  path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/thank-you" exact>
            <ThankyouPage />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/portfolio/:project" exact>
            <PortfolioProject />
          </Route>
          <Route path='/terms-of-use' exact>
            <TermsOfUse />
          </Route>
          <Route path='/admin-area' exact>
            <AdminArea />
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
        <Footer />
    </Router>, rootElement);
    
})();

