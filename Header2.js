import React, { Component } from 'react';

class Header2 extends Component {

    render() {
  
      return (
        <div className="header">
        <div className="bank" style={{marginLeft: "5em"}}>Bank
        <span className="nav">

          <span className="size">Dashboard|| 
          <span className="Accounts">Accounts</span>||
          <span className="Transactions">Transactions</span>
      
          </span>
        </span>
        </div>
        </div>
      )
  
    }
  
  }

  export default Header2