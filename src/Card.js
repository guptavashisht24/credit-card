import React from 'react';
import "./App.css";
import Chip from './assets/chip.png';
import Amex from './assets/amex.png';

const Card = () => {
  return (<>
    <div className="full">
      <div className="card">
        <div className="logo-row w100">
          <div><img src={Chip} className="w70 h55"></img></div>
          <div><img src={Amex} className="w70 h55"></img></div>
        </div>
        <div className="num-row w100 info">
          <div>####</div><div>####</div><div>####</div><div>####</div>
        </div>
        <div className="info-row w100">
          <div>
            <div className="label">
              Card Holder
          </div>
            <div className="info">
              VASHISHT GUPTA
          </div>
          </div>
          <div>
            <div className="label">
              Expires
          </div>
            <div className="info">
              MM/YY
          </div>
          </div>
        </div>
      </div>
      <div className="form">

      </div>
    </div>
  </>)
}


export default Card;