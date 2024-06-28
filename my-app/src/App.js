import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import About from './components/About';


function App() {
  return (
    <>
      <Navbar title ="Text Changer" home= "Home"/>
      <div className="container m-3 p-5 ">
      <InputForm heading ="Enter your text here"/>     
{/* <About/> */}

      </div>
    </>
  );
}

export default App;
