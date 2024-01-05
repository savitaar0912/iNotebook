import './App.css';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        {/* <Alert type="success" msg="This is iNotebook"/> */}
        <div className="container">
          <Routes>
            <Route exact path='/notes' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
