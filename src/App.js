import React from 'react';
import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Booking from './components/Booking';
import AppointmentHistory from './components/AppointmentHistory';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/history" element={<AppointmentHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
