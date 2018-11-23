import React, { Component } from 'react';

class RightPane2 extends Component {

  render() {

    return (
      <div className="rightPane">
      <form className="form2" style={{background: "white", borderRadius:"10px", padding: "5px", marginLeft:"10px"}}>
      <span style={{fontSize: "2em", marginLeft: "0%"}} >Transactions
      <span><input type="button" value="View All" style={{marginLeft: "47%", background:"skyBlue", borderRadius: "10px"}}></input></span>
      </span>
      <hr></hr>
      <div>
      <div><br /></div>
      <div><br /></div>
      <div><br /></div>
      </div>
      </form>
      {/* <h2>Selected Food: {this.props.selectedFood}</h2> */}
      </div>
    )

  }

}
export default RightPane2