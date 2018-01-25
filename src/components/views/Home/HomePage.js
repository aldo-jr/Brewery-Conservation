import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getBottlesInfos} from '../../../actions/bottles/actionCreator'

class HomePage extends Component {
  componentWillMount(){
    this.props.getBottlesInfos()
  }
  componentDidMount() {
    this.interval = setInterval(()=>{this.props.getBottlesInfos()},1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  static getStatus(current,maximum,minimum){
    if(current > maximum || current < minimum) return "danger";
    else  return'success';
  }

  render() {
    return (
      <div>
        <section className="container my-4">
          <div className="text-center">
            <h1>Check your beer bottles</h1>
          </div>

          <section className="row mt-3 justify-content-center">
            {this.props.bottles.infos ? this.props.bottles.infos.map((bottle, index) => {
              let status = this.getStatus(parseInt(bottle.current_temp, 10),parseInt(bottle.maximum_temp, 10),parseInt(bottle.minimum_temp, 10));
              return (
                <section className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
                  <div className='bottle-detail pb-3'>
                    <header className={`text-center mb-3 py-3 bg-${status}`}>
                      <h2 className='m-0 text-white'>Bottle {bottle.bottle}</h2>
                    </header>
                    <section>
                      <ul>
                        <li><b>Type:</b> {bottle.type}</li>
                        <li><b>Maximum temperature:</b> {bottle.maximum_temp}ºC</li>
                        <li><b>Minimum temperature:</b> {bottle.minimum_temp}ºC</li>
                        <li>
                          <b>Current temperature:</b> <span className={`text-${status}`}>{bottle.current_temp}ºC</span>
                        </li>
                      </ul>
                    </section>
                  </div>
                </section>
              )
            }) || "Bottles Not Found" : "Loading"}

          </section>
        </section>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    bottles: state.bottles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBottlesInfos: () => {
      dispatch(getBottlesInfos())
    }
  }
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer