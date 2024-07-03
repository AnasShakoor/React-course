
// import logo from './logo.svg';
// import * as React from "react";
// import './App.css';
// import Navbar from './components/Navbar';
// import InputForm from './components/InputForm';
// import About from './components/About';
// import { useState, useEffect } from 'react';
// import Alert from './components/Alert';
// import { BrowserRouter as Router } from 'react-router-dom';


// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Link,
//   Route,
//   createRoutesFromElements,
// } from "react-router-dom";
// import "./index.css";

// function App() {
//   const [mode, setMode] = useState({
//     color: 'black',
//     backgroundColor: 'white',
//   });

//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1000);
//   };

//   const dismissAlert = () => {
//     setAlert(null);
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = mode.backgroundColor;
//   }, [mode.backgroundColor]);

//   const toggleMode = (event) => {
//     event.preventDefault();
//     if (mode.color === 'black') {
//       setMode({
//         color: 'white',
//         backgroundColor: 'black',
//       });
//       showAlert('The Dark mode is enabled successfully!', 'success');
//     } else {
//       setMode({
//         color: 'black',
//         backgroundColor: 'white',
//       });
//       showAlert('The Light mode is enabled successfully!', 'success');
//     }
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <InputForm heading="Enter your text here" mode={mode} showAlert={showAlert} />,
//     },
//     {
//       path: "/about",
//       element: <About/>,
//     }
//   ]);
//   return (
//     <>
    
//       <Navbar title="Text Changer" about="About" home="Home" mode={mode} toggleMode={toggleMode} />
//       <div style={{ position: 'fixed', top: 14, left: 0, right: 0, zIndex: 1000 }}>
//         <Alert alert={alert} dismissAlert={dismissAlert} />
//       </div>
//       <div className="container m-3 p-5">
//         <RouterProvider router={router} />
//       </div>
//     </>
//   );
// }

// export default App;

// ReactDOM.render(
//   <StrictMode>
//       <Router>
//         <App />
//       </Router>

//   </StrictMode>,
//   rootElement
// );




import logo from './logo.svg';
import * as React from "react";
import './App.css';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import About from './components/About';
import { useState, useEffect } from 'react';
import Alert from './components/Alert';
import { Routes, Route } from "react-router-dom"



// import * as ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const dismissAlert = () => {
    setAlert(null);
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode.backgroundColor;
  }, [mode.backgroundColor]);

  const toggleMode = (event) => {
    event.preventDefault();
    if (mode.color === 'black') {
      setMode({
        color: 'white',
        backgroundColor: 'black',
      });
      showAlert('The Dark mode is enabled successfully!', 'success');
    } else {
      setMode({
        color: 'black',
        backgroundColor: 'white',
      });
      showAlert('The Light mode is enabled successfully!', 'success');
    }
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <InputForm heading="Enter your text here" mode={mode} showAlert={showAlert} />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>,
  //   }
  // ]);
  return (
    <>
      <Navbar title="Text Changer" about="About" home="Home" mode={mode} toggleMode={toggleMode} />
      <div style={{ position: 'fixed', top: 14, left: 0, right: 0, zIndex: 1000 }}>
        <Alert alert={alert} dismissAlert={dismissAlert} />
      </div>
      <div className="container m-3 p-5">
      <Routes>
      <Route exact path="/" element={ <InputForm heading="Enter your text here" mode={mode} showAlert={showAlert} /> } />
      <Route exact path="/about" element={ <About/> } />
      </Routes>
      </div>
    </>
  );
}

export default App;



