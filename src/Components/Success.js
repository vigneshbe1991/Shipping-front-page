import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import { AppBar } from '@material-ui/core';


let theme = createMuiTheme();
export class Success extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar className="details"> <h2>Success !!!</h2> </AppBar>
                    <h1> Thank you for the submission </h1>
                    <p> you will get an email with the tracking details </p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
    
}
export default Success;
