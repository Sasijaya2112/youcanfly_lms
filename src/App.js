import './App.css';
import Login from './Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
