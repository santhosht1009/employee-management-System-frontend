import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">

                <a className="navbar-brand" href="#">Employee Management System</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
       
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/employees">Employees</Link>
       
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-employee">Add Employee</Link>
       
      </li>
     
    </ul>
    
  </div>


</nav>

                </header>
            </div>
        );
    }
}

export default HeaderComponent;
