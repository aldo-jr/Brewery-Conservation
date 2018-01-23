import {Component} from 'react';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {

    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }

    const navbarSupportedContent = $("#navbarSupportedContent");
    if (navbarSupportedContent.hasClass('show')) {
      navbarSupportedContent.collapse('hide');
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop);