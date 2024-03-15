import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './Pages/Home';
import { Route, Router, BrowserRouter as router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/addemployee' element={<AddEmployee/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
