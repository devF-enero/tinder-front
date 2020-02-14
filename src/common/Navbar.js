import React, { Component } from "react";
import { Link } from 'react-router-dom';
import payload from '../utils/payload';

class Navbar extends Component {
  constructor(props) {
    //Inicializa el estado
    super(props);
    this.state = {
      token: localStorage.getItem("token")
    };
  }

  render() {
    // Pintar UI
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Meetup Clone 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {this.state.token ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Hola  {payload().first_name}
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/event/create">
                      Crear Evento
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Sign Up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    //Se ejecuta despues de pintar la UI
    // Call API
    /* fetch('https://swapi.com/').then((response) => {
            this.state.data = response.json();
            this.setState({data:response.json()})
        }) */
  }

  componentDidUpdate(prevProps, prevState) {
    //Cuando recibe props nuevos del Componente Padre
    //Cuando se modifica el estado
  }

  componentWillUnmount() {
    //Cuando ya no se quita el componente del DOM
  }
}

export default Navbar;
