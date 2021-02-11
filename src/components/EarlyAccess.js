import React from 'react';
import './EarlyAccess.css';
import Form from './Form';

function EarlyAccess(){
    return(
        <div className="early-access">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Get early access today</h2>
              <p>It only takes a minute to sign up and our free starter tier is extermely generous. if you have any questions, our support team would be happy to help you.</p>
            </div>
            <div className="col-lg-6">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
}
export default EarlyAccess;