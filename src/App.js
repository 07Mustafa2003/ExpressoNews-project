import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Politics from './components/Pages/Politicts/Politics';
import Health from './components/Pages/Health/Health';

const App = () => {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900">
        <Header/>
        <div className=" w-full ">
          <Routes>
            <Route path="/" element={<Home />} className="w-full"/>
            <Route path="/politics" element={<Politics />} className="w-full"/>
            <Route path="/health" element={<Health />} className="w-full"/>
            {/* Add more routes for other pages as needed */}
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
