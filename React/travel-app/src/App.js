import logo from './logo.svg';
import './App.css';
import './styles/pages/styles.scss';
import {
  BrowserRouter,Routes,
  Route
} from 'react-router-dom'

import Home from './screen/Home';
import Login from './screen/Login';
import Explore from './screen/Explore';
import Profile from './screen/Profile'
import Trips from './screen/Trips';
import NotFound from './screen/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/trips" element={<Trips/>}/>
      <Route element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;
