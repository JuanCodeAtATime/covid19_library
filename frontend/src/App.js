import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import LabTesting from './pages/BrowseResources/BrowseResources';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (

    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/labTesting" component={LabTesting} />
          {/* <Route path="/">Home</Route> */}
        </Switch>
      </React.Fragment>
      <Footer />
    </Router>
  );
}

export default App;
