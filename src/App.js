import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Home';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Shop from './pages/Shop';
import Contact from './pages/Contact';



function App() {
  return (
    <div >

      <Routes>

        <Route path='/' element={<Homepage />}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>


      </Routes>
    </div>
  );
}

export default App;
