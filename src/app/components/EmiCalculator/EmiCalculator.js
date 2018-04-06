import React from 'react';
import { Link, IndexLink } from 'react-router';
import './EmiCalculator.css';

const EmiCalculator = (props) => {
    return (
       <div>
            <form>
                <div className="form-group">
                <label>Type of Loan:</label>
                <input type="text" className="form-control" id="type" placeholder="Home Loan" name="type" disabled />
                </div>
                <div className="form-group">
                <label>Amount:</label>
                <input type="text" className="form-control" id="amount" placeholder="Enter Amount" name="amount" />
                </div>
                <div className="form-group">
                <label>Tenure: </label><br/>
                <select id="tenure">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
                </div>
                <div className="form-group">
                <label>Rate of interest:</label>
                <input type="text" className="form-control" id="roi" placeholder="8.5%" name="roi" disabled />
                </div>
                <button type="button" className="btn btn-primary">Calculate</button>
            </form>

            <div className="message"></div>
       </div>
    );
  };

export default EmiCalculator;
