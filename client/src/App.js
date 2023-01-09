
import './App.css';
import Home from './components/Home';
import Body from './components/components-originalsite/Body.jsx' 
import Hospitality from './components/Hospitality';
import Spanish from './components/Spanish';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
   
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/developer" element={<Body/>}></Route>
      <Route exact path="/hospitality" element={<Hospitality/>}></Route>
      <Route exact path="/spanish" element={<Spanish/>}></Route>
      </Routes>
  
    </Router>

  );
}

export default App;
