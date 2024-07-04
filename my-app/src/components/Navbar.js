

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar(props) {

  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  },[bgColor]);  

  const changeBg = (cls) => {

    console.log('it is clicked');
    // document.body.classList.add('btn'); 
    // document.body.classList.add('d-flex'); 
    // setBgColor(`${cls}`)
    }
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={props.mode}>
      <div className="container-fluid" style={props.mode}>
        <Link className="navbar-brand" style={props.mode} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" style={props.mode} aria-current="page" to="/">{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" style={props.mode} aria-current="page" to="/about">{props.about}</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2 " style={{
              height: '30px', width: '30px',
              cursor: 'pointer'
            }} onClick={() => {
              changeBg("primay");
            }}  ></div>
            <div className="bg-success rounded mx-2 " style={{
              height: '30px', width: '30px',
              cursor: 'pointer'
            }} onClick={props.toggleMode}  ></div>
            <div className="bg-danger rounded mx-2 " style={{
              height: '30px', width: '30px',
              cursor: 'pointer'
            }} onClick={props.toggleMode}  ></div>
            <div className="bg-secondary  rounded mx-2 " style={{
              height: '30px', width: '30px',
              cursor: 'pointer'
            }} onClick={props.toggleMode}  ></div>

          </div>

          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <button className="btn btn-outline-success mx-3 px-3" style={props.mode} onClick={props.toggleMode}>Toggle Mode</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.object.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "My Text Changer App",
  home: "Home",
  about: "About"
};
