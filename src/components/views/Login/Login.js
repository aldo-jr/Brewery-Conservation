import React, {Component} from 'react'
import LoginForm from './LoginForm'

export default class Login extends Component {
  submit = (values) => {
    values = {
      email: values.user,
      password: values.password
    }
    const {from} = this.props.location.state || {from: {pathname: '/panel'}};
    // this.props.signInAction(values, this.props.history, from);
  };

  render() {
    return (
      <div>
        {this.errorMessage()}
        <LoginForm onSubmit={this.submit.bind(this)}/>
      </div>
    )
  }
}