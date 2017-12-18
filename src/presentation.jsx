import React, {Component} from "react";
import PropTypes from "prop-types";

const Presentation = ({
    productName, 
    taxBracket, 
    depositAmount, 
    returnOnInvestment, 
    inflationRate,
    yearsInvested,
    retirementTaxRate
}) => {

    const isTFSA = (productName === "TFSA") ? true: false;
    
    const realRateOfReturn = ((1 + (returnOnInvestment/100))/(1 + (inflationRate/100))) - 1;    
    const amtForProduct = isTFSA ? (depositAmount - (depositAmount*taxBracket/100)) : depositAmount;
    const onMaturity = amtForProduct * Math.pow((1+realRateOfReturn), yearsInvested);
    const taxOnRRSP = onMaturity * (retirementTaxRate/100);    
    const postTaxRRSP = onMaturity - taxOnRRSP;
    
    return(
        <div className = "root__content__panel">
            <div className = "root__content__panel__item root__content__panel__item--headings">
                <strong>{productName}</strong>
            </div>
            <div className = "root__content__panel__item">
                ${depositAmount}
            </div>                    
            <div className = "root__content__panel__item">{isTFSA ? `${taxBracket}%`: "N/A"}</div>
            <div className = "root__content__panel__item">
                ${+amtForProduct.toFixed(2)}
            </div>                    
            <div className = "root__content__panel__item">
                ${+onMaturity.toFixed(2)}
            </div>                    
            <div className = "root__content__panel__item">
                ${isTFSA ?  0 : +taxOnRRSP.toFixed(2)}
            </div>                    
            <div className = "root__content__panel__item">
                ${isTFSA ? +onMaturity.toFixed(2) : +postTaxRRSP.toFixed(2)}
            </div>                      
        </div>
    );    
};

Presentation.propTypes = {
    productName: PropTypes.string,
    taxBracket: PropTypes.number,
    depositAmount: PropTypes.number,
    returnOnInvestment: PropTypes.number,
    yearsInvested: PropTypes.number,
    retirementTaxRate: PropTypes.number
};

export default Presentation;