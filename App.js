import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import Blog from './Component/Blog';
import Service from './Component/Service';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path = '/Home' element={<Home/>}/>
        <Route path='/AboutUs' element = {<AboutUs/>}/>
        <Route path='/Blog' element = {<Blog/>}/>
        <Route path='/Service' element = {<Service/>}/>
      </Routes>
    </div>
  );
}

export default App;
