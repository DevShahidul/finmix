import React from 'react';
import Women from '../../assets/images/Women.svg';
import './FinmixCreation.scss';

const FinmixCreation = props => {
  return (
    <div className="Finmix-Creation">
      <div className="banner">
        <img src={Women} alt="Finmix Creation"/>
      </div>
      <div className="hero-box">
        <h5>New Finmix Creation..</h5>
        <p>There easy three step to  create Finmix </p>
        <button className="btn create">Create Finmix</button>
      </div>
    </div>
  );
};


export default FinmixCreation;