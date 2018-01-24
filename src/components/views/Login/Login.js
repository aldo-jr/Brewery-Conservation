import React, {Component} from 'react'
import LoginForm from './LoginForm'
import {signInAction, isAuthenticated} from '../../../actions/auth/actionCreator';
import {connect} from 'react-redux';

class Login extends Component {
  submit = (values) => {
    values = {
      email: values.user,
      password: values.password
    }
    const {from} = this.props.location.state || {from: {pathname: '/panel'}};
    this.props.signInAction(values, this.props.history, from);
  };

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  async componentWillMount() {
    await this.props.isAuthenticated(async (data)=>{if (await data) this.props.history.push('/panel')});
  }

  render() {
    return (
      <div>
        {this.errorMessage()}
        <LoginForm onSubmit={this.submit.bind(this)}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
  };
}
const mapDispatchToProps = dispatch => {
  return {
    signInAction: (values, history, from) => {
      dispatch(signInAction(values, history, from))
    },
    isAuthenticated
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);