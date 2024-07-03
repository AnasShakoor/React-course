// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// export default function Navbar(props) {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary" style={props.mode}>
//       <div className="container-fluid" style = {props.mode}>
//         <a className="navbar-brand" style={props.mode} href="/">{props.title}</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" style={props.mode} href="/">{props.home}</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" style={props.mode} href="/about">{props.about}</a>
//             </li>
//           </ul>
//           <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
//               <input className="form-control me-2" style = {props.mode}type="search" placeholder="Search" aria-label="Search"/>
//             <button className="btn btn-outline-success" style={props.mode} type="submit">Search</button>
//             <button className="btn btn-outline-success mx-3 px-3" onClick={props.toggleMode} style={props.mode}>Toggle Mode</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   home: PropTypes.string.isRequired,
//   mode: PropTypes.object.isRequired,
//   toggleMode: PropTypes.func.isRequired,
// };

// Navbar.defaultProps = {
//   title: "My Text Changer App",
//   home: "Home"
// };


import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={props.mode}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            <button className="btn btn-outline-success mx-3 px-3" onClick={props.toggleMode}>Toggle Mode</button>
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
