import React from "react";
import { connect } from "react-redux";


class NewAbility extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }


render(){
    return(
        <div className="App">why wont you render</div>
    )
}


}



const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => ({
   
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewAbility);
  