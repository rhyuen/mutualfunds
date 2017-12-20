import React, {Component} from "react";
import InputForm from "./inputform.jsx";
import Presentation from "./presentation.jsx";
import PresentationHeader from "./presentationheader.jsx";

class App extends Component{

    state = {
        taxBracket: 35.5,
        depositAmount: 1000.00,
        yearsInvested: 10,
        returnOnInvestment: 10.5,
        inflationRate: 2.3,
        retirementTaxRate: 15.5
    }

    handleFormChange = (e) => {                
        const userInput = e.target.value;
        const inputName = e.target.name;
        const updatedValue = parseFloat(userInput);
        let theDifference = {};        

        //Cap length of input to four except for the deposit.
        if(userInput.length > 5 && inputName !== "deposit"){
            return;
        }
          
        this.setState(prevState => {
            switch(inputName){
                case "deposit":
                    theDifference = {depositAmount: updatedValue};
                    break;
                case "years":
                    theDifference = {yearsInvested: updatedValue};
                    break;
                case "taxbracket":
                    theDifference = {taxBracket: updatedValue};
                    break;
                case "inflation":
                    theDifference = {inflationRate: updatedValue};
                    break;
                case "retirement":
                    theDifference = {retirementTaxRate: updatedValue};
                    break;
                case "returnoninvestment":
                    theDifference = {returnOnInvestment: updatedValue};
                    break;
            }   
         
            
            //If the value of the input is invalid, set the value to 0
            if(Number.isNaN(updatedValue)){                
                theDifference[Object.keys(theDifference)[0]] = 0;
                return Object.assign(prevState, theDifference);                
            }                          
            return Object.assign(prevState, theDifference);            
        });
    }
    render(){
        return (
            <div className = "root">
                <InputForm 
                    onInputChange = {this.handleFormChange}                   
                    {...this.state}/>
                <div className = "root__content">
                    <PresentationHeader/>
                    <Presentation productName = "TFSA" {...this.state}/>
                    <Presentation productName = "RRSP" {...this.state}/>                             
                </div>
            </div>
        )
    }
}

export default App;