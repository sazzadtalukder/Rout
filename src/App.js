
import './App.css';

import Home from './MyComponent/Home';
import About from './MyComponent/About';
import Service from './MyComponent/Service';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/service">Service</Link>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route exact path='/service' element={<Service/>} />
    </Routes>
    <h1>I am a footer</h1>
    </BrowserRouter>
  );
}

export default App;
