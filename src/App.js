import React from 'react';
import './App.css';
import Shipmentdetail from './Components/Shipmentdetail';
import Success from './Components/Success';
import Confirm from './Components/Confirm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Button, AppBar } from '@material-ui/core';
 


function App() {
  return (
    <div className="App">
      <div>
      <AppBar className="details"> Failed </AppBar>
      </div>
     
      <div>
      <Container>
        <Router>   
            

        <nav>
          <ul className="home">
            <li>
              <Button variant="outlined" >
              <Link to="/">Home</Link>
              </Button>
            </li>
          </ul>
        </nav>


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
        </Container>
        
        </div>
      
    </div>
  );
}

export default App;
