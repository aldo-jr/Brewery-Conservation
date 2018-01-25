import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="mx-auto text-center">
            <Link className="navbar-brand m-0" to="/panel">Brewery Conservation</Link>

            {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                    {/*data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"*/}
                    {/*aria-label="Toggle navigation">*/}
              {/*<span className="navbar-toggler-icon"/>*/}
            {/*</button>*/}

            {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
              {/*<ul className="navbar-nav mx-auto">*/}
                {/*<li className="nav-item active">*/}
                  {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                  {/*<a className="nav-link" href="#">Bottles</a>*/}
                {/*</li>*/}
              {/*</ul>*/}
            {/*</div>*/}
          </div>
        </nav>
      </header>
    )
  }
}