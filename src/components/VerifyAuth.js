import {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyToken } from '../actions/auth/actionCreator'


class VerifyAuth extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.verifyToken(this.props.history);
    }

  }

  componentDidMount() {
    this.props.verifyToken(this.props.history);
  }

  render() {
    return this.props.children
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    verifyToken : (history) => {
      dispatch(verifyToken(history))
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VerifyAuth));
