import React, {Component} from "react";
import PropTypes from "prop-types";

const InputForm = ({    
    onInputChange,    
    taxBracket, 
    depositAmount, 
    yearsInvested, 
    inflationRate, 
    retirementTaxRate,
    returnOnInvestment
}) => (
    <div className = "root__input">
        <h1 className = "root__input__banner">TFSA or RRSP</h1>
        <div className = "root__input__buttons">
            
            <span className ="root__input__buttons__item">    
                <label>Marginal Tax (%)</label>           
                <input type = "text" 
                    placeholder = "Marginal Tax Rate"      
                    name = "taxbracket"  
                    onChange = {onInputChange}    
                    value = {taxBracket}/>         
            </span>
            <span className ="root__input__buttons__item">     
                <label>Pre-Tax Deposit ($)</label>          
                <input type = "text" 
                    placeholder = "Deposit Amount" 
                    name = "deposit"
                    onChange = {onInputChange}
                    value = {depositAmount}/>
            </span>
            <span className ="root__input__buttons__item">    
                <label>ROI (%)</label>           
                <input type = "text" 
                    placeholder = "Interest Rate"
                    name = "returnoninvestment"
                    onChange = {onInputChange}
                    value = {returnOnInvestment}/>
            </span>
            <span className ="root__input__buttons__item">  
                <label>Years of Investment</label>             
                <input type = "text" 
                    placeholder = "Years of Investment"
                    name = "years"
                    onChange = {onInputChange}
                    value = {yearsInvested}/>
            </span>
            <span className ="root__input__buttons__item">         
                <label>Retirement Tax (%)</label>   
                <input type = "text" 
                    placeholder = "Estimated Tax Rate at Retirement"
                    name = "retirement"
                    onChange = {onInputChange}
                    value = {retirementTaxRate}/>
            </span>        
            <span className ="root__input__buttons__item">            
                <label>Inflation Rate (%)</label>   
                <input type = "text" 
                    placeholder = "Rate of inflation"
                    name = "inflation"
                    onChange = {onInputChange}
                    value = {inflationRate}/>
            </span>
        </div>
    </div>
);

InputForm.propTypes = {
    onInputChange: PropTypes.func,
    taxBracket: PropTypes.number, 
    depositAmount: PropTypes.number, 
    yearsInvested: PropTypes.number, 
    inflationRate: PropTypes.number, 
    retirementTaxRate: PropTypes.number,
    returnOnInvestment: PropTypes.number
};

export default InputForm;

