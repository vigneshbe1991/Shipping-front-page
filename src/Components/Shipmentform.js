import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

export class Shipmentform extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange} = this.props;
        return (
            <MuiThemeProvider >
                <React.Fragment>
                    <h4> Shipement ID : </h4> 
                    <TextField 
                    hintText = "Enter the shipment ID"
                    flotingLabelText="Shipment ID"
                    onChange={handleChange('Shipement ID')}
                    defaultValue={values.shipment_id}/>
                    <br/>
                    
                    <h4> Shipement Name : </h4>
                    <TextField 
                    hintText = "Enter the shipment Name"
                    flotingLabelText="Shipment Name"
                    onChange={handleChange('Shipement Name')}
                    defaultValue={values.shipmentname}/>
                    <br/>
                    
                    <h4> Shipement Location : </h4>
                    <TextField 
                    hintText = "Enter the shipment Location"
                    flotingLabelText="Shipment Location"
                    onChange={handleChange('Shipement Location')}
                    defaultValue={values.shipmentlocation}/>
                    <br/>

                    <h4> Shipped date: </h4>
                    <TextField 
                    hintText = "Select the shipment date"
                    flotingLabelText="Shipment date"
                    onChange={handleChange('Shipement date')}
                    defaultValue={values.shipmentdate}/>
                    <br/>
              
                    <Button 
                    label = "Continue"
                    variant="contained" 
                    color="primary"
                    style = {styles.button}
                    onClick= {this.continue}> Continue </Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
    
}

const styles = {
    button : {
        margin: 15
    }
}

export default Shipmentform;
