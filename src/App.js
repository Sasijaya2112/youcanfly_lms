import './App.css';
import Login from './Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import Home from './Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/youcanfly_lms" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
