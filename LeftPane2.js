import React, { Component } from 'react';


class LeftPane2 extends Component {

  render() {

    return (
      <div className="leftPane">
      <form className="form">
        <span className="Acc" style={{fontSize: "1.7em", marginLeft: "0%"}}>
          Accounts
          <span> 
            <span className="butt">
              <input type="button" value="+Add new account" className="btn"></input>
              <input type="button" value="View All" className="btn2"></input>
            </span>
          </span>
        </span>
        <hr></hr>
        <div>
          <div style={{marginLeft: "10em", padding:"2em", fontSize: "15px"}}>0 <br /> accounts</div>
          {/* <div style={{marginLeft: "10em", padding:"20px"}}>accounts</div> */}
        </div>
      </form>

      </div>
    )

  }

}
export default LeftPane2
