import React, {Component} from 'react';
import { signOutAction } from '../../../actions/auth/actionCreator';
import { connect } from 'react-redux';

class Logout extends Component {

  componentDidMount(){
    this.props.signOutAction(this.props.history)
  }

  render() {
    return (
      <div/>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default connect(mapStateToProps, {signOutAction})(Logout);