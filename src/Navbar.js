import './Navbar.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id='bg-color'  >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Travel API</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="/navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <a><ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recommendations">Recommendations</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.nationsonline.org/oneworld/IATA_Codes/airport_code_list.htm#T" target='_blank'>IATA codes</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">SignUp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/SignIn">Login</Link>
                            </li>

                        </ul></a>
                        
                        
                    </div>
                    
                </div>
            </nav>
        </div>
    )
  }
}
