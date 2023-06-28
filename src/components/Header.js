import React from 'react';
import marketImage from './../img/market.jpg';

function Header() {
  return (
    <React.Fragment>
      <div className="header" style={{ backgroundImage: `url(${marketImage})` }}>
      <h1>Welcome to Avery's Farmer's Market</h1>
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default Header;