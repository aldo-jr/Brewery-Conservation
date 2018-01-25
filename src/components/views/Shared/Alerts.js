import React, {Component} from 'react';
import {connect} from 'react-redux';
import AlertsApi from '../../../actions/alerts/actionCreator';

let timeOutClearMessages;
class Alerts extends Component {
  render() {

    if(this.props.msgErr || this.props.msgSucc || this.props.msgWar){
      clearTimeout(timeOutClearMessages);
      timeOutClearMessages = setTimeout(()=>{
        this.props.cleanAlerts()
      }, 6000);
    }

    return (
      <div className="global-alert">
        <div className="alert-center mx-auto ">
          <div
            className={`alert global-alert-success text-center alert-success alert-dismissible ${this.props.msgSucc ? '' : 'd-none'}`}
            role="alert">
            {this.props.msgSucc}
          </div>
          <div
            className={`alert global-alert-danger text-center alert-danger alert-dismissible  ${this.props.msgErr ? '' : 'd-none'}`}
            role="alert">
            {this.props.msgErr}
          </div>
          <div
            className={`alert global-alert-warning text-center alert-warning alert-dismissible ${this.props.msgWar ? '' : 'd-none'}`}
            role="alert">
            {this.props.msgWar}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    msgErr: state.alerts.msgErr,
    msgSucc: state.alerts.msgSucc,
    msgWar: state.alerts.msgWar
  }
};

const mapDispatchToProps = dispatch => {
  return {
    cleanAlerts: () => {
      dispatch(AlertsApi.cleanAlerts())
    }
  }
}

const AlertsContainer = connect(mapStateToProps, mapDispatchToProps)(Alerts);

export default AlertsContainer;