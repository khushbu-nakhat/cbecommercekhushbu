import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
//import PrivateComponent from './PrivateComponent'
import Login from './Login'
import Home from './Home';
//import Nav from './Nav';

const Router =()=>{
    return(
    <div>
    <BrowserRouter >
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login />} />
     </Routes>
     </BrowserRouter>
     </div>
)
}
export default Router