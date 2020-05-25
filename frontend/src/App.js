import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing/Landing';

import Emergency from './pages/BrowseResources/EmergencyResponse';
import RiskComm from './pages/BrowseResources/RiskComm';
import CaseFinding from './pages/BrowseResources/CaseFinding';

import Surveillance from './pages/BrowseResources/Surveillance';
import PublicHealth from './pages/BrowseResources/PublicHealth';
import InfectionPrevention from './pages/BrowseResources/InfectionPrevention';

import LabTesting from './pages/BrowseResources/LabTesting';
import CaseMgt from './pages/BrowseResources/CaseManagement';
import SocietalResponse from './pages/BrowseResources/SocietalResponse';

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
          <Route exact path="/emergency-response" component={Emergency} />
          <Route exact path="/risk-communication" component={RiskComm} />
          <Route exact path="/case-finding" component={CaseFinding} />

          <Route exact path="/surveillance" component={Surveillance} />
          <Route exact path="/public-health-prevention" component={PublicHealth} />
          <Route exact path="/infection-prevention" component={InfectionPrevention} />

          <Route exact path="/lab-testing" component={LabTesting} />
          <Route exact path="/case-management-hospital-response" component={CaseMgt} />
          <Route exact path="/societal-response" component={SocietalResponse} />



          {/* <Route path="/">Home</Route> */}
        </Switch>
      </React.Fragment>
      <Footer />
    </Router>
  );
}

export default App;
