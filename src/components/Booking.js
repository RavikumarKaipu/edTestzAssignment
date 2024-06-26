import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3000/appointments', { appointment_date: date }, {
        headers: {
          Authorization: token
        }
      });
      setError('');
    } catch (err) {
      setError('Error booking appointment. Try again.');
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Book Appointment</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Booking;
