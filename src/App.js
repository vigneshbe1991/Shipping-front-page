import React from 'react';
import './App.css';
import Shipmentdetail from './Components/Shipmentdetail';
import Success from './Components/Success';
import Confirm from './Components/Confirm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container,  Grid } from '@material-ui/core';
 


function App() {
  return (
    <div className="App">
        
      <header className="header">Proof Of Concept</header>
  
      <Container  maxWidth="sm">
        <div className="app-container">
          <Grid>
        <Router>   

        <Switch>
        <Route path='/' exact render={()=> 
        <Shipmentdetail />}>
        </Route>
        <Route path='/confirm' render={(props)=> 
        <Confirm  {...props} />}>
        </Route>
        <Route path='/success' exact render={()=> 
        <Success />}>
        </Route>
        <Route path='/home' exact render={()=> 
        <Shipmentdetail />}>  
        </Route>
  
      </Switch>
      
        </Router>
        </Grid>
        </div>
        </Container>
        
    
    <footer>
      <p>Company © Shasta Tek. All rights reserved.</p>
    </footer>

    </div>
  );
}

export default App;
